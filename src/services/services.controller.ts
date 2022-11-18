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
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';

@Controller('admin/services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    private readonly utils: Utils,
    @InjectRepository(Service)
    private readonly servicosRepository: Repository<Service>,
  ) {}

  @Get('create')
  @Render('/services/cadastrar')
  exibirCadastrar() {}

  @Get('index')
  @Render('/services/index')
  async listarServicos() {
    const servicos = await this.servicosRepository.find();
    return { servicos: servicos };
  }

  @Post()
  @Redirect('/admin/services/index')
  async cadastrar(@Body() createServiceDto: CreateServiceDto) {
    createServiceDto.valorBanheiro = this.utils.formatDecimal(
      createServiceDto.valorBanheiro,
    );
    createServiceDto.valorCozinha = this.utils.formatDecimal(
      createServiceDto.valorCozinha,
    );
    createServiceDto.valorMinimo = this.utils.formatDecimal(
      createServiceDto.valorMinimo,
    );
    createServiceDto.valorQuintal = this.utils.formatDecimal(
      createServiceDto.valorQuintal,
    );
    createServiceDto.valorSala = this.utils.formatDecimal(
      createServiceDto.valorSala,
    );
    createServiceDto.valorOutros = this.utils.formatDecimal(
      createServiceDto.valorOutros,
    );
    createServiceDto.valorquarto = this.utils.formatDecimal(
      createServiceDto.valorquarto,
    );
    return await this.servicosRepository.save(createServiceDto);
  }

  @Get(':id/edit')
  @Render('services/editar')
  async atualizarServico(@Param('id') id: number) {
    const servico = await this.servicosRepository.findOneBy({ id: id });
    return { servico: servico };
  }

  @Patch(':id/edit')
  @Redirect('/admin/services/index')
  async update(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return await this.servicosRepository.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
