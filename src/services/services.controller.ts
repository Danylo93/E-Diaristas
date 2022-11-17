import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Redirect } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('admin/services')
export class ServicesController {
  constructor(
      private readonly servicesService: ServicesService,
      @InjectRepository(Service)
     private readonly servicosRepository: Repository<Service>) {}

  @Get()
  @Render('services/cadastrar')
  exibirCadastrar() {
    
  }

  @Post()
  @Redirect('services/cadastrar')
 async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    await this.servicosRepository.save(createServiceDto);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
