import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { EnderecoResponse } from 'src/api/consulta-endereco/dto/endereco-response.dto';

@Injectable()
export class ViaCepService {
  async buscarEnderecoPorCep(cep: string) {
    const URL_CEP = `https://viacep.com.br/ws/${cep}/json/`;

    let endereco = new EnderecoResponse();

    try {
      const body = await axios.get(URL_CEP);
      endereco = body.data;
    } catch (error) {
      if (error.response['status'] === 400) {
        throw new BadRequestException('CEP inválido.');
      }
      if (error.response['status'] === 500) {
        throw new BadRequestException(
          'Serviço de cep fora do ar. Tente novamente.',
        );
      }
    }
    if (endereco['erro'] === true) {
      throw new NotFoundException('Cep não encontrado.');
    }

    return endereco;
  }
}
