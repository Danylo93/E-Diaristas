import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect, Request, UseFilters } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateException } from 'src/common/filters/create-exceptions.filter';

@Controller('admin/services')
export class ServicesController {
  constructor(
      private readonly servicesService: ServicesService,
      @InjectRepository(Service)
     private readonly servicosRepository: Repository<Service>) {}

  @Get('create')
  @Render('services/cadastrar')
  exibirCadastrar(@Request() req) {
    return{message: req.flash('message'), oldData: req.flash('oldData')};
  }

  @Get('index')
  @Render('services/index')
 async listarServicos() {
    const servicos = await this.servicosRepository.find();
    return {servicos: servicos};
  }

  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/services/index')
 async cadastrar(@Body() createServiceDto: CreateServiceDto) {
   return await this.servicosRepository.save(createServiceDto);
  }

  @Get(':id/edit')
  @Render('services/editar')
 async atualizarServico(@Param('id') id: number) {
    const servico = await this.servicosRepository.findOneBy({id: id});
    return {servico: servico};
  }

  @Patch(':id/edit')
  @Redirect('/admin/services/index')
 async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
  return await this.servicosRepository.update(id, updateServiceDto);
   
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
