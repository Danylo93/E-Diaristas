import { Controller, Get } from '@nestjs/common';
import { DiaristasService } from './diaristas.service';

@Controller('api/diaristas')
export class DiaristasController {
  constructor(private readonly diaristasService: DiaristasService) {}

  @Get('localidades')
  async buscarPorCep() {
    return await this.diaristasService.buscarDiaristaPorCep('000');
  }

}

