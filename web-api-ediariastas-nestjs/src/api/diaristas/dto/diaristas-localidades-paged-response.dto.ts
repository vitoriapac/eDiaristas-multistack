import { Expose } from 'class-transformer';
import { DiaristaLocalidadeResponse } from './create-diarista.dto';

export class DiaristaLocalidadePagedResponse {
  diaristas: DiaristaLocalidadeResponse[];

  @Expose({ name: 'quantidade_diaristas' })
  tamanhoPagina: number;

  @Expose({ name: 'total_elementos' })
  totalElementos: number;

  constructor(
    diaristas: DiaristaLocalidadeResponse[],
    tamanhoPagina: number,
    totalElementos: number,
  ) {
    this.diaristas = diaristas;
    this.tamanhoPagina =
      totalElementos > tamanhoPagina ? totalElementos - tamanhoPagina : 0;
  }
}
