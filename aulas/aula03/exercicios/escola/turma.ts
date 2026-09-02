import { Aluno } from './aluno';
import { Professor } from './professor';
import { Disciplina } from './disciplina';

export class Turma {
  constructor(
    private semestre: number,
    private alunos: Aluno[],
    protected professor: Professor,
    protected disciplina: Disciplina,
  ) { };

  matricular(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  relatorio(): void {
    console.log(`Turma de ${this.disciplina.nome}`);
    console.log(`Semestre ${this.semestre}`);
    console.log(`Professor: ${this.professor.nome}`);
    console.log(`==> Alunos matriculados: ${this.alunos.length}`);
    for (let aluno of this.alunos) {
      console.log(`-> ${aluno.matricula} ${aluno.nome}`);
    }
  }
}

