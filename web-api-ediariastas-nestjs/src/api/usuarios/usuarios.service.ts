import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UsuarioMapper } from './usuarios.mapper';
import { UsuarioRepository } from './usuarios.repository';
import { UsuarioRequestDto } from './dto/usuario-request.dto';
import { ValidatorPasswordConfirmation } from 'src/core/validators/usuarios/validator-password';
import { ValidatorUsuarioPix } from 'src/core/validators/usuarios/validator-usuario-pix';
import { FotosService } from '../fotos/fotos.service';
import { MailService } from 'src/core/services/mail/mail.service';

@Injectable()
export class UsuariosService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioMapper: UsuarioMapper,
    private validator: ValidatorPasswordConfirmation,
    private validatorPix: ValidatorUsuarioPix,
    private foto: FotosService,
    private mailService: MailService,
  ) {}

  async cadastrar(
    usuarioRequestDto: UsuarioRequestDto,
    file: Express.Multer.File,
    req: Request,
  ) {
    this.validator.validarConfirmacaoSenha(
      usuarioRequestDto.password,
      usuarioRequestDto.passwordConfirmation,
    );

    // this.validatorPix.validarUsuarioPix(usuarioRequestDto);
    usuarioRequestDto.chavePix =
      this.validatorPix.validarUsuarioPix(usuarioRequestDto);

    const foto = await this.foto.salvar(file, req);

    const usuarioParaCadastrar = this.usuarioMapper.toUsuarioRequestDto(
      usuarioRequestDto,
      foto,
    );

    usuarioParaCadastrar.reputacao = await this.calcularReputacaoMedia(
      usuarioRequestDto.tipoUsuario,
    );

    usuarioParaCadastrar.senha = await usuarioParaCadastrar.setPassword(
      usuarioRequestDto.password,
    );

    const usuarioCadastrado = await this.usuarioRepository.repository.save(
      usuarioParaCadastrar,
    );

    await this.mailService.enviarEmailDeConfirmacao(usuarioCadastrado);

    return this.usuarioMapper.toUsuarioResponseDto(usuarioCadastrado);
  }

  private async calcularReputacaoMedia(tipoUsuario: number): Promise<number> {
    let reputacaoMedia =
      await this.usuarioRepository.repository.getMediaReputacao(tipoUsuario);

    if (reputacaoMedia === null || reputacaoMedia === 0) {
      reputacaoMedia = 5;
    }

    return reputacaoMedia;
  }
}
