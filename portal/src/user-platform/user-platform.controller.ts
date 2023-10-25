import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  UseFilters,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserPlatformService } from './user-platform.service';
import { CreateUserPlatformDto } from './dto/create-user-platform.dto';
import { UpdateUserPlatformDto } from './dto/update-user-platform.dto';
import { CreateException } from 'src/common/filters/create-exceptions.filter';
import { PatchException } from 'src/common/filters/patch-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { AuthException } from 'src/common/filters/auth-exceptions.filter';

@Controller('admin/users')
export class UserPlatformController {
  constructor(private readonly userPlatformService: UserPlatformService) {}

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('index')
  @Render('users/index')
  async listarUsers(@Request() req) {
    return {
      users: await this.userPlatformService.findAll(),
      csrfToken: req.csrfToken(),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('create')
  @Render('users/signup')
  async signupUsers(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      csrfToken: req.csrfToken(),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(CreateException)
  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/users/index')
  create(@Body() createUserPlatformDto: CreateUserPlatformDto) {
    return this.userPlatformService.create(createUserPlatformDto);
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get(':id/edit')
  @Render('users/edit')
  async editUser(@Param('id') id: number, @Request() req) {
    const user = await this.userPlatformService.findOne(id);
    return {
      user: user,
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      csrfToken: req.csrfToken(),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(PatchException)
  @Patch(':id/edit')
  @Redirect('/admin/users/index')
  async update(
    @Param('id') id: number,
    @Body() updateUserPlatformDto: UpdateUserPlatformDto,
  ) {
    return await this.userPlatformService.update(id, updateUserPlatformDto);
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Delete(':id')
  @Redirect('/admin/users/index')
  remove(@Param('id') id: number) {
    return this.userPlatformService.remove(id);
  }
}
