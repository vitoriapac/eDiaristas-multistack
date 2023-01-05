import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsuarioPlataformaService } from './usuario-plataforma.service';
import { UsuarioPlataformaController } from './usuario-plataforma.controller';
import { UsuarioPlataforma } from './entities/usuario-plataforma.entity';
import { Utils } from 'src/utils/utils';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPlataforma])],
  controllers: [UsuarioPlataformaController],
  providers: [UsuarioPlataformaService, Utils],
})
export class UsuarioPlataformaModule {}
