import { Injectable } from '@nestjs/common';
import { DiaristaRepository } from './diaristas.repository';
import { DiaristaMapper } from './diaristas.mapper';

@Injectable()
export class DiaristasService {
  constructor(
    private diaristaRepository: DiaristaRepository,
    private diaristaMapper: DiaristaMapper,
  ) { }
  async buscarDiaristaPorCep(cep: string) {
    const usuarios = await this.diaristaRepository.repository.buscarDiaristaPorCep();
    return usuarios.map((usuario) => this.diaristaMapper.toDiaristaLocalidadeResponseDto(usuario));
  }


}
