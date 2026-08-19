import {Livro} from './livro';

// Introdução a objetos
let livro1: Livro = new Livro("Autor 1", "Titulo 1", false);
livro1.autor = "Autor 1";
livro1.titulo = "Titulo 1";
livro1.disponivel = false;

livro1.devolver();

let livro2: Livro = new Livro("Autor 2", "Titulo 2", false);

console.log(livro1.descricao() + "\n" + livro2.descricao());
console.log("---");

// Arrays
const acervo: Livro[] = [];

acervo.push(livro1);
acervo.push(livro2);
acervo.push(new Livro("Autor 3", "Titulo 3", false));

console.log(acervo.length);
console.log(acervo[0].titulo);
console.log("---");

/* Maneiras já conhecidas de percorrer um array com iteração 

for(let i = 0; i < acervo.length; i++) {
  console.log(acervo[i].descricao());
}

let i: number = 0;
while(i < acervo.length) {
  console.log(acervo[i].descricao());
  i++;
}

*/

// Maneira nova do JavaScript
for(let livro of acervo) {
  console.log(livro.descricao());
}

/* Outro meio de percorrer um array (com .forEach())

acervo.forEach(l => console.log(l.descricao()));

*/
