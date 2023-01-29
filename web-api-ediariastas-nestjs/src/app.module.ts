import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { CidadesAtendidasModule } from './api/cidades-atendidas/cidades-atendidas.module';
import { DiaristasModule } from './api/diaristas/diaristas.module';
import { UsuariosModule } from './api/usuarios/usuarios.module';
import { EnderecoModule } from './api/consulta-endereco/endereco.module';
import { ServicosModule } from './api/servicos/servicos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsuariosModule,
    CidadesAtendidasModule,
    DiaristasModule,
    EnderecoModule,
    ServicosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
