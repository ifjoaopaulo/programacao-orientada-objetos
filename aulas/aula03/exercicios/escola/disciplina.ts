export class Disciplina {
  constructor(
    private nomeDisciplina: string,
  ) { };

  get nome(): string {
    return this.nomeDisciplina;
  }
}
