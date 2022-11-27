import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Controller('admin/servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Get()
  @Render('servicos/cadastrar')
  exibirCadastrar() {
    // return 'Página de cadastro de serviços';
  }

  @Post()
  create(@Body() createServicoDto: CreateServicoDto) {
    return this.servicosService.create(createServicoDto);
  }

  // @Get()
  // findAll() {
  //   return this.servicosService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicoDto: UpdateServicoDto) {
    return this.servicosService.update(+id, updateServicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicosService.remove(+id);
  }
}
