import { Injectable } from '@nestjs/common';
import { UsuarioRequestDto } from './dto/usuario-request.dto';

@Injectable()
export class UsuariosService {
  create(createUsuarioDto: UsuarioRequestDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
