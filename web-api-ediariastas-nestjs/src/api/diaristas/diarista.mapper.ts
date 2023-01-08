import { DiaristaLocalidadeResponse } from './dto/create-diarista.dto';
import { UsuarioApi } from './../usuarios/entities/usuario.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiaristaMapper {
  toDiaristaLocalidadeResponseDto(usuario: UsuarioApi) {
    const diaristaDTO = new DiaristaLocalidadeResponse();

    diaristaDTO.nomeCompleto = usuario.nomeCompleto;
    diaristaDTO.reputacao = usuario.reputacao;
    diaristaDTO.fotoUsuario = null;
    diaristaDTO.cidade = null;

    return diaristaDTO;
  }
}
