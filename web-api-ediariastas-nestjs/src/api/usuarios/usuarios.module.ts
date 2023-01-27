import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioApi } from './entities/usuario.entity';
import { UsuarioMapper } from './usuarios.mapper';
import { UsuarioRepository } from './usuarios.repository';
import { EmailJaExiste } from './../../core/validators/usuarios/validator-email';
import { ChavePixExiste } from 'src/core/validators/usuarios/validator-chavepix';
import { CpfJaExiste } from 'src/core/validators/usuarios/validator-cpf';
import { ValidatorPasswordConfirmation } from 'src/core/validators/usuarios/validator-password';
import { ValidatorUsuarioPix } from 'src/core/validators/usuarios/validator-usuario-pix';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioApi])],
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
  ],
})
export class UsuariosModule {}
