import { Module } from '@nestjs/common';
import { EnderecoService } from './adapters/endereco-service';
import { ViaCepService } from './../../core/via-cep.service';
import { ConsultaEnderecoController } from './consulta-endereco.controller';
import { EnderecoMapper } from './endereco.mapper';

@Module({
  providers: [ViaCepService, EnderecoService, EnderecoMapper],
  controllers: [ConsultaEnderecoController],
})
export class EnderecoModule {}
