import { Controller, Get, Post, Body, Patch, Param, Render, Redirect, Request, UseFilters } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateException } from 'src/common/filters/create-exceptions.filter';
import { PatchException } from 'src/common/filters/patch-exceptions.filter';

@Controller('admin/services')
export class ServicesController {
  constructor(
      private readonly servicesService: ServicesService,
      ) {}

  @Get('create')
  @Render('services/cadastrar')
  exibirCadastrar(@Request() req) {
    return{message: req.flash('message'), oldData: req.flash('oldData'), alert: req.flash('alert'),};
  }

  @Get('index')
  @Render('services/index')
 async listarServicos() {
    
    return {servicos: await this.servicesService.findAll()};
  }

  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/services/index')
 async cadastrar(@Body() createServiceDto: CreateServiceDto) {
  
   return await this.servicesService.create(createServiceDto);
  }

  @Get(':id/edit')
  @Render('services/editar')
 async atualizarServico(@Param('id') id: number, @Request() req) {
    return{message: req.flash('message'), oldData: req.flash('oldData'), alert: req.flash('alert'),
    servico: await this.servicesService.findOne(id),
  };
  }

  @Patch(':id/edit')
  @UseFilters(PatchException)
  @Redirect('/admin/services/index')
 async update(
  @Param('id') id: number, 
  @Body() updateServiceDto: UpdateServiceDto,
  ) {
  return await this.servicesService.update(id, updateServiceDto);
  }

}
