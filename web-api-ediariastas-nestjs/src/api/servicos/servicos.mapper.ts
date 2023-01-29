import { Servico } from './entities/servico.entity';
import { Injectable } from '@nestjs/common';
import { ServicoResponse } from './dto/servico-response.dto';

@Injectable()
export class ServicosMapper {
  toServicoResponseDto(servico: Servico): ServicoResponse {
    const servicoDto = new ServicoResponse();

    servicoDto.id = servico.id;
    servicoDto.nome = servico.nome;
    servicoDto.valorMinimo = servico.valorMinimo;
    servicoDto.quantidadeHoras = servico.quantidadeHoras;
    servicoDto.porcentagem = servico.porcentagem;
    servicoDto.valorQuarto = servico.valorQuarto;
    servicoDto.horasQuarto = servico.horasQuarto;
    servicoDto.valorSala = servico.valorSala;
    servicoDto.horasSala = servico.horasSala;
    servicoDto.valorBanheiro = servico.valorBanheiro;
    servicoDto.horasBanheiro = servico.horasBanheiro;
    servicoDto.valorCozinha = servico.valorCozinha;
    servicoDto.horasCozinha = servico.horasCozinha;
    servicoDto.valorQuintal = servico.valorQuintal;
    servicoDto.horasQuintal = servico.horasQuintal;
    servicoDto.valorOutros = servico.valorOutros;
    servicoDto.horasOutros = servico.horasOutros;
    servicoDto.icone = servico.icone;
    servicoDto.posicao = servico.posicao;

    return servicoDto;
  }
}
