import { Stack } from './stack';
import { Livro } from './livro';
import { Dvd } from './dvd';

let livro1: Livro = new Livro('Dom Casmurro', 'Machado de Assis');
let livro2: Livro = new Livro('1984', 'George Orwell');

const livros: Livro[] = [];
livros.push(livro1);

const stackLivros: Stack<Livro> = new Stack<Livro>(livros);

stackLivros.push(livro2);
console.log(`Popped: ${stackLivros.pop()?.titulo}`);
console.log(`Popped: ${stackLivros.pop()?.titulo}`);
console.log(stackLivros.isEmpty() === true ? `Stack livros está vazio` : `Stack livros não está vázio`);

let dvd1: Dvd = new Dvd('Transformers', 130);
let dvd2: Dvd = new Dvd('Bee Movie', 90);

const dvds: Dvd[] = [];

const stackDvd: Stack<Dvd> = new Stack<Dvd>(dvds);

stackDvd.push(dvd1);
console.log(stackDvd.isEmpty() === true ? `Stack DVD está vazio` : `Stack DVD não está vázio`);
console.log(`Popped: ${stackDvd.pop()?.titulo}`);
