import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UsuarioPlataformaService } from './usuario-plataforma.service';
import { CreateUsuarioPlataformaDto } from './dto/create-usuario-plataforma.dto';
import { UpdateUsuarioPlataformaDto } from './dto/update-usuario-plataforma.dto';
import { CreateException } from 'src/commom/filters/create-exceptions.filter';
import { PatchException } from 'src/commom/filters/patch-exceptions.filter';
import { AuthenticatedGuard } from 'src/commom/guards/authenticated.guard';
import { AuthException } from 'src/commom/filters/auth-exceptions.filter';

@Controller('admin/usuarios')
export class UsuarioPlataformaController {
  constructor(
    private readonly usuarioPlataformaService: UsuarioPlataformaService,
  ) {}

  @Get('index')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('usuarios/index')
  async listarUsuarios() {
    return { usuarios: await this.usuarioPlataformaService.findAll() };
  }

  @Get('create')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('usuarios/cadastrar')
  async exibirCadastrarUsuario(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Post()
  @UseGuards(AuthenticatedGuard)
  @UseFilters(CreateException)
  @Redirect('/admin/usuarios/index')
  create(@Body() createUsuarioPlataformaDto: CreateUsuarioPlataformaDto) {
    return this.usuarioPlataformaService.create(createUsuarioPlataformaDto);
  }

  @Get(':id/edit')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('usuarios/editar')
  async editarUsuario(@Param('id') id: number, @Request() req) {
    const user = await this.usuarioPlataformaService.findOne(id);
    return {
      usuario: user,
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Patch(':id/edit')
  @UseFilters(PatchException)
  @Redirect('/admin/usuarios/index')
  async update(
    @Param('id') id: number,
    @Body() updateUsuarioPlataformaDto: UpdateUsuarioPlataformaDto,
  ) {
    return await this.usuarioPlataformaService.update(
      id,
      updateUsuarioPlataformaDto,
    );
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Redirect('/admin/usuarios/index')
  remove(@Param('id') id: number) {
    return this.usuarioPlataformaService.remove(id);
  }
}
