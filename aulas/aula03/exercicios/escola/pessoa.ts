export class Pessoa {
  constructor(
    protected cpf: string,
    protected _nome: string,
    protected idade: number,
    protected telefone: string
  ) { };

  get nome(): string {
    return this._nome;
  }
}
