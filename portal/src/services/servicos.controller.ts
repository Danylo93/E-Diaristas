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
import { CreateServiceDto } from './dto/create-servico.dto';
import { UpdateServiceDto } from './dto/update-servico.dto';
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
  @Render('services/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      csrfToken: req.csrfToken(),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get('index')
  @Render('services/index')
  async listarServicos() {
    return { servicos: await this.servicosService.findAll() };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/services/index')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    return await this.servicosService.create(createServiceDto);
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Get(':id/edit')
  @Render('services/editar')
  async atualizarServico(@Param('id') id: number, @Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      servico: await this.servicosService.findOne(id),
      csrfToken: req.csrfToken(),
    };
  }

  @UseGuards(AuthenticatedGuard)
  @UseFilters(PatchException)
  @Patch(':id/edit')
  @Redirect('/admin/services/index')
  async update(
    @Param('id') id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return await this.servicosService.update(id, updateServiceDto);
  }
}
