import { Servico } from './entities/servico.entity';
import { Injectable } from '@nestjs/common';
import { ServicoResponse } from './dto/servico-response.dto';

@Injectable()
export class ServicosMapper {
  toServicoResponseDto(servico: Servico): ServicoResponse {
    const servicoDto = new ServicoResponse();

    servicoDto.id = servico.id;
    servicoDto.nome = servico.nome;
    servicoDto.valorMinimo = this.converterReal(servico.valorMinimo);
    servicoDto.quantidadeHoras = servico.quantidadeHoras;
    servicoDto.porcentagem = servico.porcentagem;
    servicoDto.valorQuarto = this.converterReal(servico.valorQuarto);
    servicoDto.horasQuarto = servico.horasQuarto;
    servicoDto.valorSala = this.converterReal(servico.valorSala);
    servicoDto.horasSala = servico.horasSala;
    servicoDto.valorBanheiro = this.converterReal(servico.valorBanheiro);
    servicoDto.horasBanheiro = servico.horasBanheiro;
    servicoDto.valorCozinha = this.converterReal(servico.valorCozinha);
    servicoDto.horasCozinha = servico.horasCozinha;
    servicoDto.valorQuintal = this.converterReal(servico.valorQuintal);
    servicoDto.horasQuintal = servico.horasQuintal;
    servicoDto.valorOutros = this.converterReal(servico.valorOutros);
    servicoDto.horasOutros = servico.horasOutros;
    servicoDto.icone = servico.icone;
    servicoDto.posicao = servico.posicao;

    return servicoDto;
  }

  private converterReal(valor: number) {
    valor = valor / 100;

    return valor.toFixed(2);
  }
}
