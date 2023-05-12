import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Render,
  Redirect,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateException } from 'src/common/filters/create-exceptions.filter';
import { PatchException } from 'src/common/filters/patch-exceptions.filter';
import { AuthenticatedGuard } from 'src/common/guards/authenticated.guard';
import { AuthException } from 'src/common/filters/auth-exceptions.filter';

@Controller('admin/services')
export class ServicesController {
  constructor(private readonly servicosService: ServicosService) {}

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('create')
  @Render('servicos/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('index')
  @Render('servicos/index')
  async listarServicos() {
    return { servicos: await this.servicosService.findAll() };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/servicos/index')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    return await this.servicosService.create(createServiceDto);
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get(':id/edit')
  @Render('servicos/editar')
  async atualizarServico(@Param('id') id: number, @Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      servico: await this.servicosService.findOne(id),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(PatchException)
  @Patch(':id/edit')
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return await this.servicosService.update(id, updateServiceDto);
  }
}
