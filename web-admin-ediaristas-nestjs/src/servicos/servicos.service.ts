import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { Servico } from './entities/servico.entity';
import { Utils } from 'src/utils/utils';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicosRepository: Repository<Servico>,
    private readonly utils: Utils,
  ) {}

  async create(createServicoDto: CreateServicoDto) {
    createServicoDto.valorBanheiro = this.utils.formatDecimal(
      createServicoDto.valorBanheiro,
    );
    createServicoDto.valorCozinha = this.utils.formatDecimal(
      createServicoDto.valorCozinha,
    );
    createServicoDto.valorQuarto = this.utils.formatDecimal(
      createServicoDto.valorQuarto,
    );
    createServicoDto.valorQuintal = this.utils.formatDecimal(
      createServicoDto.valorQuintal,
    );
    createServicoDto.valorSala = this.utils.formatDecimal(
      createServicoDto.valorSala,
    );
    createServicoDto.valorOutros = this.utils.formatDecimal(
      createServicoDto.valorOutros,
    );
    createServicoDto.valorMinimo = this.utils.formatDecimal(
      createServicoDto.valorMinimo,
    );
    return await this.servicosRepository.save(createServicoDto);
  }

  async findAll() {
    return await this.servicosRepository.find();
  }

  async findOne(id: number) {
    return await this.servicosRepository.findOneBy({ id: id });
  }

  async update(id: number, updateServicoDto: UpdateServicoDto) {
    updateServicoDto.valorBanheiro = this.utils.formatDecimal(
      updateServicoDto.valorBanheiro,
    );
    updateServicoDto.valorCozinha = this.utils.formatDecimal(
      updateServicoDto.valorCozinha,
    );
    updateServicoDto.valorQuarto = this.utils.formatDecimal(
      updateServicoDto.valorQuarto,
    );
    updateServicoDto.valorQuintal = this.utils.formatDecimal(
      updateServicoDto.valorQuintal,
    );
    updateServicoDto.valorSala = this.utils.formatDecimal(
      updateServicoDto.valorSala,
    );
    updateServicoDto.valorOutros = this.utils.formatDecimal(
      updateServicoDto.valorOutros,
    );
    updateServicoDto.valorMinimo = this.utils.formatDecimal(
      updateServicoDto.valorMinimo,
    );
    return await this.servicosRepository.update(id, updateServicoDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} servico`;
  // }
}
