import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      database: 'ediaristas',
      username: 'root',
      password: 'treinaweb',
      host: 'localhost',
      port: 3306,
      synchronize: false,
      type: 'mysql',
      entities: [join(__dirname, '..', '**type/*entity.{ts, js}')],
      migrations: [join(__dirname, '..', './database/migrations/*.{ts, js}')],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
