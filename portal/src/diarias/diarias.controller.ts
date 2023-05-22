import {
  Controller,
  Get,
  UseGuards,
  UseFilters,
  Render,
  Redirect,
  Param,
  Query,
} from '@nestjs/common';
import { AuthException } from 'src/common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { DiariasService } from './diarias.service';
import { GetDiariasFilterDto } from './dto/get-diarias-filter.dto';

@Controller('admin/diarias')
export class DiariasController {
  constructor(private readonly diariasService: DiariasService) {}

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('index')
  @Render('diarias/index')
  async findAll(@Query() filterDto: GetDiariasFilterDto) {
    if (Object.keys(filterDto).length) {
      return {
        diarias: await this.diariasService.getDiariasFilters(filterDto),
      };
    }
    return { diarias: await this.diariasService.findAll() };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get(':id/pagar')
  @Redirect('/admin/diarias/index')
  async pagar(@Param('id') id: number) {
    return await this.diariasService.pagar(id);
  }
}