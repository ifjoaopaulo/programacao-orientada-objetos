import { Pessoa } from './pessoa';

export class Aluno extends Pessoa {
  constructor(
    cpf: string,
    nome: string,
    idade: number,
    telefone: string,
    private _matricula: number,
  ) {
    super(cpf, nome, idade, telefone);
  }

  get matricula(): number {
    return this._matricula;
  }
}

