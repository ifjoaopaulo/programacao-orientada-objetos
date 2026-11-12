import { Pessoa } from "./pessoa";

export class Professor extends Pessoa {
  constructor(
    nome: string,
    cpf: string,
    protected siape: string,
  ) {
    super(nome, cpf);
  }

  descricao(): string {
    return `Professor ${this.nome} - SIAPE: ${this.siape}`;
  }
}
