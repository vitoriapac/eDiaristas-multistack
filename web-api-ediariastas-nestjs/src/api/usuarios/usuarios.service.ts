import { Injectable } from '@nestjs/common';
import { UsuarioMapper } from './usuarios.mapper';
import { UsuarioRepository } from './usuarios.repository';
import { UsuarioRequestDto } from './dto/usuario-request.dto';

@Injectable()
export class UsuariosService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioMapper: UsuarioMapper,
  ) {}

  async cadastrar(usuarioRequestDto: UsuarioRequestDto) {
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
