import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-servico.dto';
import { UpdateServiceDto } from './dto/update-servico.dto';
import { Servico } from './entities/servico.entity';

@Injectable()
export class ServicosService {
  constructor(
    private readonly utils: Utils,
    @InjectRepository(Servico)
     private readonly servicosRepository: Repository<Servico>
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
    createServiceDto.valorQuarto = this.utils.formatDecimal(
      createServiceDto.valorQuarto,
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
    updateServiceDto.valorQuarto = this.utils.formatDecimal(
      updateServiceDto.valorQuarto,
    );

    return await this.servicosRepository.update(id, updateServiceDto);
  }

}
