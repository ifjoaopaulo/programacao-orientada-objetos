import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Livro } from './livros/livro';

export const opcoesBanco: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'biblioteca',
  entities: [Livro],
  synchronize: true,
};
