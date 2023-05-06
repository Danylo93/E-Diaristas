import { Module } from '@nestjs/common';
import { DiaristasService } from './diaristas.service';
import { DiaristasController } from './diaristas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioApi } from '../usuarios/entities/usuario.entity';
import { DiaristaRepository } from './diaristas.repository';
import { DiaristaMapper } from './diaristas.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioApi])],
  controllers: [DiaristasController],
  providers: [DiaristasService, DiaristaRepository, DiaristaMapper]

})
export class DiaristasModule {}
