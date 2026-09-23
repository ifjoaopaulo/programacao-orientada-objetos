import { Prateleira } from './prateleira';
import { Livro } from './livro';
import { Dvd } from './dvd';

function ultimo<T>(itens: T[]): T {
  return itens[itens.length - 1];
}

const livros = new Prateleira<Livro>(2);
livros.guardar(new Livro('Dom Casmurro', 'Machado de Assis'));
livros.guardar(new Livro('1984', 'George Orwell'));

const dvds = new Prateleira<Dvd>(5);
dvds.guardar(new Dvd('Cidade de Deus', 130));

for (const livro of livros.listar()) {
  console.log(`${livro.titulo}, de ${livro.autor}`);
}

for (const dvd of dvds.listar()) {
  console.log(`${dvd.titulo} (${dvd.duracaoMinutos} min)`);
}

console.log('Último livro guardado:', ultimo(livros.listar()).titulo);

try {
  livros.guardar(new Livro('O Cortiço', 'Aluísio Azevedo'));
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

// livros.guardar(new Dvd('Central do Brasil', 110));   // não compila

// Teste Map<K, V>;
const catalogo = new Map<string, Livro>();

catalogo.set('978-85-01', new Livro('Dom Casmurro', 'Machado'));
catalogo.set('978-85-02', new Livro('1984', 'Orwell'));

const livro = catalogo.get('978-85-01'); // Livro | undefined
console.log(livro);
console.log(catalogo.has('978-85-02')); // true
console.log(catalogo.size); // 2
