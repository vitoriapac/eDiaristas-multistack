import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioRequestDto } from './dto/usuario-request.dto';

@Controller('api/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async cadastrar(@Body() usuarioRequestDto: UsuarioRequestDto) {
    return await this.usuariosService.cadastrar(usuarioRequestDto);
  }
}
