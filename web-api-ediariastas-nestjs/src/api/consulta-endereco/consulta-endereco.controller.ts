import { Controller, Get, Query } from '@nestjs/common';
import { EnderecoMapper } from './endereco.mapper';
import { EnderecoResponse } from 'src/api/consulta-endereco/dto/endereco-response.dto';
import { EnderecoService } from './adapters/endereco-service';

@Controller('api/enderecos')
export class ConsultaEnderecoController {
  constructor(
    private enderecoService: EnderecoService,
    private enderecoMapper: EnderecoMapper,
  ) {}

  @Get()
  async buscarEnderecoPorCep(
    @Query('cep') cep: string,
  ): Promise<EnderecoResponse> {
    const endereco = await this.enderecoService.buscarEnderecoCep(cep);

    return this.enderecoMapper.toEnderecoResponseDto(endereco);
  }
}
