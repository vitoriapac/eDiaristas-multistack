import { UsuarioApi } from './../usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class DiaristaRepository {
  constructor(
    @InjectRepository(UsuarioApi)
    private diaristaRepository: Repository<UsuarioApi>,
  ) {}

  repository = this.diaristaRepository.extend({
    async buscarDiaristaPorCep(): Promise<UsuarioApi[]> {
      return await this.find();
    },
  });
}
