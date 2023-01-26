import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioApi } from './entities/usuario.entity';

export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioApi)
    private usuarioRepository: Repository<UsuarioApi>,
  ) {}

  repository = this.usuarioRepository.extend({});
}
