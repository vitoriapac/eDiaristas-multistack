import { Repository } from 'typeorm';
import { UsuarioApi } from './entities/usuario.entity';

export class UsuarioRepository {
  constructor(private usuarioRepository: Repository<UsuarioApi>) {}

  repository = this.usuarioRepository.extend({});
}
