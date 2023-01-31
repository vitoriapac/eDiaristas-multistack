import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UrlGeneratorModule } from 'nestjs-url-generator';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { CidadesAtendidasModule } from './api/cidades-atendidas/cidades-atendidas.module';
import { DiaristasModule } from './api/diaristas/diaristas.module';
import { UsuariosModule } from './api/usuarios/usuarios.module';
import { EnderecoModule } from './api/consulta-endereco/endereco.module';
import { ServicosModule } from './api/servicos/servicos.module';
import { ApiController } from './api/api.controller';
import { HateoasIndex } from './core/hateoas/hateoas-index';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UsuariosModule,
    CidadesAtendidasModule,
    DiaristasModule,
    EnderecoModule,
    ServicosModule,
    UrlGeneratorModule.forRoot({ appUrl: 'http://localhost:3001' }),
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, HateoasIndex],
})
export class AppModule {}
