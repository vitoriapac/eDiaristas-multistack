import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioApi } from './entities/usuario.entity';
import { UsuarioMapper } from './usuarios.mapper';
import { UsuarioRepository } from './usuarios.repository';
import { Foto } from './../fotos/entities/foto.entity';
import { EmailJaExiste } from 'src/core/validators/usuarios/validator-email';
import { ChavePixExiste } from 'src/core/validators/usuarios/validator-chavepix';
import { CpfJaExiste } from 'src/core/validators/usuarios/validator-cpf';
import { ValidatorPasswordConfirmation } from 'src/core/validators/usuarios/validator-password';
import { ValidatorUsuarioPix } from 'src/core/validators/usuarios/validator-usuario-pix';
import { FotosService } from '../fotos/fotos.service';
import { MailModule } from 'src/core/services/mail/mail.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioApi, Foto]), MailModule],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    UsuarioMapper,
    UsuarioRepository,
    EmailJaExiste,
    CpfJaExiste,
    ChavePixExiste,
    ValidatorUsuarioPix,
    ValidatorPasswordConfirmation,
    FotosService,
  ],
})
export class UsuariosModule {}
