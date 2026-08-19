import { Usuario } from './usuario';
import { Emprestimo } from './emprestimo';

// Exercício 1
let usuario1: Usuario = new Usuario("João", "2026002");
let usuario2: Usuario = new Usuario("Maria", "2026001");
let usuario3: Usuario = new Usuario("Lucas", "2026003"); // Usuário para ex. 3

console.log(`${usuario1.nome}, (Matrícula: ${usuario1.matricula})`);
console.log(`${usuario2.nome}, (Matrícula: ${usuario2.matricula})`);
console.log(`${usuario3.nome}, (Matrícula: ${usuario3.matricula})`); 

// Exercício 2
usuario3.pegarLivro();
usuario3.pegarLivro();
usuario3.pegarLivro();
usuario3.devolverLivro();
console.log(`Quantidade de livros do ${usuario3.nome}: ${usuario3.livrosEmprestados}`);

/*
Exercício 3: Anotações
Erros encontrados: 1. constructor não tem this antes do título. O correto seria "this.titulo = titulo"
                   2. método emprestar() também não tem this. O correto seria "this.disponivel = false"
                   3. método emprestar() usa uma propriedade "disponivel" que não está declarada na classe nem no constructor
                   4. quando criando objeto l, faltou o new antes da classe. O correto seria const l = new Livro('1984');
                   5. quando chamando o método emprestar no objeto l, faltou parênteses. O correto seria l.emprestar();
*/

// Exercício 4
let emprestimo1: Emprestimo = new Emprestimo(usuario1.nome, '1984', 10);
let emprestimo2: Emprestimo = new Emprestimo(usuario2.nome, 'Dom Casmurro', 20);

console.log(`Emprestimo de 10 dias:` + "\n"
           +`Está atrasado? ${emprestimo1.estaAtrasado()}` + "\n"
           +`Multa: ${emprestimo1.multa()}`);

console.log(`Emprestimo de 20 dias:` + "\n"
           +`Está atrasado? ${emprestimo2.estaAtrasado()}` + "\n"
           +`Multa: ${emprestimo2.multa()}`);
