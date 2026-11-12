import { Aluno } from './aluno';
import { Professor } from './professor';
import { Curso } from './curso';

let engSoftware: Curso = new Curso('Engenharia de Software', 'Manhã');
let medicina: Curso = new Curso('Medicina', 'Noite');

let professor1: Professor = new Professor('Maikon', '01987654321', '12345');

const alunos: Aluno[] = [];

let aluno1: Aluno = new Aluno('Ana', '12345678910', '2026001', engSoftware);
let aluno2: Aluno = new Aluno('Barbara', '12345678911', '2026004', engSoftware);
let aluno3: Aluno = new Aluno('Carlos', '12345678912', '2026002', medicina);
let aluno4: Aluno = new Aluno('Denis', '12345678913', '2026003', engSoftware);
let aluno5: Aluno = new Aluno('Eduardo', '12345678914', '2026005', medicina);
let aluno6: Aluno = new Aluno('Felipe', '12345678915', '2026006', medicina);

alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6);

console.log(professor1.descricao());

let qtdEngSoftware: number = 0;
let qtdMedicina: number = 0;
for (let aluno of alunos) {
  console.log(aluno.descricao());

  if (aluno.estaNoCurso(engSoftware)) {
    qtdEngSoftware++;
  }

  if (aluno.estaNoCurso(medicina)) {
    qtdMedicina++;
  }
}

console.log(`Quantidade de alunos em Engenharia de Software: ${qtdEngSoftware} alunos`);
console.log(`Quantidade de alunos em Medicina: ${qtdMedicina} alunos`);

// Mudando o turno do curso, deve mudar em todos os alunos.
engSoftware.turno = 'Noite';
for (let aluno of alunos) {
  console.log(aluno.descricao());
}
