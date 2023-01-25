import { Injectable } from '@nestjs/common';
import { UsuarioResponseDto } from './dto/usuario-response.dto';
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

  toUsuarioResponse(usuario: UsuarioApi): UsuarioResponseDto {
    const usuarioDto = new UsuarioResponseDto();

    usuarioDto.id = usuario.id;
    usuarioDto.nomeCompleto = usuario.nomeCompleto;
    usuarioDto.email = usuario.email;
    usuarioDto.tipoUsuario = usuario.tipoUsuario;
    usuarioDto.cpf = usuario.cpf;
    usuarioDto.nascimento = usuario.nascimento;
    usuarioDto.telefone = usuario.telefone;
    usuarioDto.chavePix = usuario.chavePix;

    return usuarioDto;
  }
}
