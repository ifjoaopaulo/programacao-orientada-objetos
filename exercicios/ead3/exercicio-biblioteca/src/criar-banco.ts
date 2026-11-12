import { DataSource } from 'typeorm';
import { opcoesBanco } from './banco';
import { Livro } from './livros/livro';

async function criarBanco() {
  const servidor = new DataSource({ ...opcoesBanco, database: 'postgres' });
  await servidor.initialize();
  await servidor.createQueryRunner().createDatabase('biblioteca', true);
  await servidor.destroy();

  const banco = new DataSource(opcoesBanco);
  await banco.initialize();

  const repositorio = banco.getRepository(Livro);
  if ((await repositorio.count()) > 0) {
    console.log('a tabela livros já tem dados');
  } else {
    await repositorio.save([
      { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 },
      { titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', ano: 1881 },
      { titulo: 'Vidas Secas', autor: 'Graciliano Ramos', ano: 1938 },
      { titulo: 'O Cortiço', autor: 'Aluísio Azevedo', ano: 1890 },
      { titulo: 'Capitães da Areia', autor: 'Jorge Amado', ano: 1937 },
      { titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', ano: 1977 },
    ]);
    console.log('6 livros cadastrados');
  }

  await banco.destroy();
}

criarBanco();
