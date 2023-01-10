import { Injectable } from '@nestjs/common';
import { EnderecoResponse } from '../dto/endereco-response.dto';
import { ViaCepService } from './../../../core/via-cep.service';
import { IEndereco } from './IEndereco';

@Injectable()
export class EnderecoService implements IEndereco {
  constructor(private viaCep: ViaCepService) {}

  async buscarEnderecoCep(cep: string): Promise<EnderecoResponse> {
    return this.viaCep.buscarEnderecoPorCep(cep);
  }
}
