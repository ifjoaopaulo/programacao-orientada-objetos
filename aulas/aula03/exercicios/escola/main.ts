import { Aluno } from './aluno';
import { Professor } from './professor';
import { Turma } from './turma';
import { Disciplina } from './disciplina';

let disciplina: Disciplina = new Disciplina('Programação Orientada a Objetos');

let professor: Professor = new Professor(
  '123.456.789-10',
  'Ana Lima',
  30,
  '4002-8922',
  'Ciência da Computação',
  'Doutorado',
);

let alunos: Aluno[] = [];

let turma1: Turma = new Turma(2, alunos, professor, disciplina);

let aluno1: Aluno = new Aluno(
  '109.876.543-21',
  'Bruno Souza',
  20,
  '1234-5678',
  2024001,
);
let aluno2: Aluno = new Aluno(
  '123.789.456-10',
  'Carla Dias',
  19,
  '8765-4321',
  2024002,
);
let aluno3: Aluno = new Aluno(
  '123.789.123-10',
  'Diego Alves',
  19,
  '1010-2020',
  2024003,
);

turma1.matricular(aluno1);
turma1.matricular(aluno2);
turma1.matricular(aluno3);

turma1.relatorio();
