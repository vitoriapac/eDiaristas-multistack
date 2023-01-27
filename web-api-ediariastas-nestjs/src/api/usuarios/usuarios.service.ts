import { Injectable } from '@nestjs/common';
import { UsuarioMapper } from './usuarios.mapper';
import { UsuarioRepository } from './usuarios.repository';
import { UsuarioRequestDto } from './dto/usuario-request.dto';
import { ValidatorPasswordConfirmation } from './../../core/validators/usuarios/validator-password';
import { ValidatorUsuarioPix } from 'src/core/validators/usuarios/validator-usuario-pix';

@Injectable()
export class UsuariosService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioMapper: UsuarioMapper,
    private validator: ValidatorPasswordConfirmation,
    private validatorPix: ValidatorUsuarioPix,
  ) {}

  async cadastrar(usuarioRequestDto: UsuarioRequestDto) {
    this.validator.validarConfirmacaoSenha(
      usuarioRequestDto.password,
      usuarioRequestDto.passwordConfirmation,
    );

    // this.validatorPix.validarUsuarioPix(usuarioRequestDto);
    usuarioRequestDto.chavePix =
      this.validatorPix.validarUsuarioPix(usuarioRequestDto);

    const usuarioParaCadastrar =
      this.usuarioMapper.toUsuarioRequestDto(usuarioRequestDto);

    usuarioParaCadastrar.senha = await usuarioParaCadastrar.setPassword(
      usuarioRequestDto.password,
    );

    const usuarioCadastrado = await this.usuarioRepository.repository.save(
      usuarioParaCadastrar,
    );

    return this.usuarioMapper.toUsuarioResponseDto(usuarioCadastrado);
  }
}
