import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaristasService } from './diaristas.service';
import { DiaristasController } from './diaristas.controller';
import { DiaristaRepository } from './diaristas.repository';
import { DiaristaMapper } from './diarista.mapper';
import { UsuarioApi } from './../usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioApi])],
  controllers: [DiaristasController],
  providers: [DiaristasService, DiaristaRepository, DiaristaMapper],
})
export class DiaristasModule {}
