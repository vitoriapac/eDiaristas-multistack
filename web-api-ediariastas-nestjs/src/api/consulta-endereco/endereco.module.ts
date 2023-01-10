import { Module } from '@nestjs/common';
import { EnderecoService } from './adapters/endereco-service';
import { ViaCepService } from './../../core/via-cep.service';

@Module({
  providers: [ViaCepService, EnderecoService],
})
export class EnderecoModule {}
