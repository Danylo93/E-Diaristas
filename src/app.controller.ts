import {
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthException } from './common/filters/auth-exceptions.filter';
import { LoginGuard } from './common/guards/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('admin/login')
  @Render('login')
  getLogin(@Request() req) {
    return {
      layout: false,
      loginError: req.flash('loginError'),
      class: req.flash('class'),
    };
  }

  @UseGuards(LoginGuard)
  @UseFilters(AuthException)
  @Post('admin/login')
  @Redirect('/admin/users/index')
  doLogin() {}
}
