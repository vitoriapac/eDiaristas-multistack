import { DataSource } from 'typeorm';
import { ERDBuilder } from 'typeorm-erd';
import { UsuarioPlataforma } from './../usuario-plataforma/entities/usuario-plataforma.entity';
import { Servico } from './../servicos/entities/servico.entity';

const AppDataSource = new DataSource({
  type: 'mysql',
  database: 'ediaristas',
  synchronize: false,
  logging: false,
  entities: [Servico, UsuarioPlataforma],
  migrations: [],
  subscribers: [],
});

const main = async () => {
  const erd = new ERDBuilder('mermaid', AppDataSource);
  await erd.initialize();
  const erdText = await erd.render();

  console.info(erdText);
};

main();
