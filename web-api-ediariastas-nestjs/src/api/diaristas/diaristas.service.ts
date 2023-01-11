import { DiaristaLocalidadePagedResponse } from './dto/diaristas-localidades-paged-response.dto';
import { Injectable } from '@nestjs/common';
import { DiaristaMapper } from './diarista.mapper';
import { DiaristaRepository } from './diaristas.repository';
import { EnderecoService } from '../consulta-endereco/adapters/endereco-service';

@Injectable()
export class DiaristasService {
  constructor(
    private diaristaRepository: DiaristaRepository,
    private diaristaMapper: DiaristaMapper,
    private enderecoService: EnderecoService,
  ) {}

  async buscarDiaristaPorCep(cep: string) {
    const codigoIbge = await this.buscarCodigoIbgePorCep(cep);
    const pageSize = 3;

    const usuarios =
      await this.diaristaRepository.repository.buscarDiaristaPorCodigoIbge(
        codigoIbge,
        pageSize,
      );

    const diaristas = usuarios.content.map((usuario) =>
      this.diaristaMapper.toDiaristaLocalidadeResponseDto(usuario),
    );
    return new DiaristaLocalidadePagedResponse(
      diaristas,
      pageSize,
      usuarios.totalElementos,
    );
  }

  private async buscarCodigoIbgePorCep(cep: string) {
    return await (
      await this.enderecoService.buscarEnderecoCep(cep)
    ).ibge;
  }
}
