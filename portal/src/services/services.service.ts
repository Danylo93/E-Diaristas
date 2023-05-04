import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    private readonly utils: Utils,
    @InjectRepository(Service)
     private readonly servicosRepository: Repository<Service>
  ){}
  async create(createServiceDto: CreateServiceDto) {
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

  async findAll() {
    return await this.servicosRepository.find();
  }

 async findOne(id: number) {
    return await this.servicosRepository.findOneBy({id: id});
  }

 async update(id: number, updateServiceDto: UpdateServiceDto) {
    updateServiceDto.valorBanheiro = this.utils.formatDecimal(
      updateServiceDto.valorBanheiro,
    );
    updateServiceDto.valorCozinha = this.utils.formatDecimal(
      updateServiceDto.valorCozinha,
    );
    updateServiceDto.valorMinimo = this.utils.formatDecimal(
      updateServiceDto.valorMinimo,
    );
    updateServiceDto.valorQuintal = this.utils.formatDecimal(
      updateServiceDto.valorQuintal,
    );
    updateServiceDto.valorSala = this.utils.formatDecimal(
      updateServiceDto.valorSala,
    );
    updateServiceDto.valorOutros = this.utils.formatDecimal(
      updateServiceDto.valorOutros,
    );
    updateServiceDto.valorquarto = this.utils.formatDecimal(
      updateServiceDto.valorquarto,
    );

    return await this.servicosRepository.update(id, updateServiceDto);
  }

}
