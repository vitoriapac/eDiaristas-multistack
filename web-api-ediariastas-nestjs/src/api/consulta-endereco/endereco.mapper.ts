import { Injectable } from '@nestjs/common';
import { EnderecoResponse } from './dto/endereco-response.dto';

@Injectable()
export class EnderecoMapper {
  toEnderecoResponseDto(endereco): EnderecoResponse {
    const enderecoDto = new EnderecoResponse();

    enderecoDto.cep = endereco.cep;
    enderecoDto.logradouro = endereco.logradouro;
    enderecoDto.complemento = endereco.complemento;
    enderecoDto.bairro = endereco.bairro;
    enderecoDto.localidade = endereco.localidade;
    enderecoDto.uf = endereco.uf;
    enderecoDto.ibge = endereco.ibge;

    return enderecoDto;
  }
}
