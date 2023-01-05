import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Render,
  Redirect,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { CreateException } from 'src/commom/filters/create-exceptions.filter';
import { PatchException } from './../commom/filters/patch-exceptions.filter';
import { AuthenticatedGuard } from 'src/commom/guards/authenticated.guard';
import { AuthException } from 'src/commom/filters/auth-exceptions.filter';

@Controller('admin/servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Get('create')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('servicos/cadastrar')
  exibirCadastrar(@Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Get('index')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('servicos/index')
  async listarServicos() {
    return { servicos: await this.servicosService.findAll() };
  }

  @Post()
  @UseGuards(AuthenticatedGuard)
  @UseFilters(CreateException)
  @Redirect('/admin/servicos/index')
  async cadastrar(@Body() createServicoDto: CreateServicoDto) {
    return await this.servicosService.create(createServicoDto);
  }

  @Get(':id/edit')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(AuthException)
  @Render('servicos/editar')
  async atuializarServico(@Param('id') id: number, @Request() req) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
      servico: await this.servicosService.findOne(id),
    };
  }

  @Patch(':id/edit')
  @UseGuards(AuthenticatedGuard)
  @UseFilters(PatchException)
  @Redirect('/admin/servicos/index')
  async update(
    @Param('id') id: number,
    @Body() updateServicoDto: UpdateServicoDto,
  ) {
    return await this.servicosService.update(id, updateServicoDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.servicosService.remove(+id);
  // }
}
