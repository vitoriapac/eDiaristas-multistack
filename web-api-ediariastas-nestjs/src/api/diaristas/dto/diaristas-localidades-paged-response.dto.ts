import { DiaristaLocalidadeResponse } from './create-diarista.dto';

export class DiaristaLocalidadePagedResponse {
  diaristas: DiaristaLocalidadeResponse[];
  tamanhoPagina: number;
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
