import { Pessoa } from './pessoa';

export class Professor extends Pessoa {
  constructor(
    cpf: string,
    nome: string,
    idade: number,
    telefone: string,
    private curso: string,
    private titulacao: string,
  ) {
    super(cpf, nome, idade, telefone);
  }
}

