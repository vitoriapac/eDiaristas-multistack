import { Injectable } from '@nestjs/common';
import { UsuarioPlataformaService } from 'src/usuario-plataforma/usuario-plataforma.service';
import { UsuarioPlataforma } from './../usuario-plataforma/entities/usuario-plataforma.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsuarioPlataformaService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UsuarioPlataforma> {
    const user = await this.userService.findOneByEmail(username);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      return match === true ? user : null;
    }
    return null;
  }
}
