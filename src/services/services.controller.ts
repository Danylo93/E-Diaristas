import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('admin/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @Render('services/cadastrar')
  exibirCadastrar() {
    
  }

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
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
