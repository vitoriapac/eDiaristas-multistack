import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicosService } from './servicos.service';
import { ServicosController } from './servicos.controller';
import { Servico } from './entities/servico.entity';
import { ServicosMapper } from './servicos.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  controllers: [ServicosController],
  providers: [ServicosService, ServicosMapper],
})
export class ServicosModule {}
