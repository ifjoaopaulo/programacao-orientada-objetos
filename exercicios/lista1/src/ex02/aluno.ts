import { Pessoa } from "./pessoa";
import { Curso } from "./curso";

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    cpf: string,
    private matricula: string,
    private curso: Curso,
  ) {
    super(nome, cpf);
  }

  descricao(): string {
    return `${this.nome}, ${this.matricula} - ${this.curso.nome} (${this.curso.turno})`;
  }

  estaNoCurso(curso: Curso): boolean {
    return this.curso === curso;
  }
}
