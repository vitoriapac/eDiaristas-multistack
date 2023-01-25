import { Injectable } from '@nestjs/common';
import { UsuarioRequestDto } from './dto/usuario-request.dto';
import { UsuarioApi } from './entities/usuario.entity';

@Injectable()
export class UsuarioMapper {
  toUsuarioRequestDto(usuarioDto: UsuarioRequestDto): UsuarioApi {
    const usuario = new UsuarioApi();

    usuario.nomeCompleto = usuarioDto.nomeCompleto;
    usuario.email = usuarioDto.email;
    usuario.senha = usuarioDto.password;
    usuario.tipoUsuario = usuarioDto.tipoUsuario;
    usuario.cpf = usuarioDto.cpf;
    usuario.nascimento = usuarioDto.nascimento;
    usuario.telefone = usuarioDto.telefone;
    usuario.chavePix = usuarioDto.chavePix;
    usuario.reputacao = usuarioDto.reputacao;

    return usuario;
  }
}
