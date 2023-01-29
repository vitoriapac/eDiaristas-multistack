import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './entities/servico.entity';
import { ServicosMapper } from './servicos.mapper';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicoRepository: Repository<Servico>,
    private servicoMapper: ServicosMapper,
  ) {}

  async findAll() {
    const servicos = await this.servicoRepository.find();

    return servicos.map((servico) =>
      this.servicoMapper.toServicoResponseDto(servico),
    );
  }
}
