export class Usuario {
  nome: string;
  matricula: string;
  livrosEmprestados: number = 0;

  constructor(nome: string, matricula: string) {
    this.nome = nome;
    this.matricula = matricula;
  }

  apresentar(): string {
    return `${this.nome} (Matrícula: ${this.matricula})`;
  }

  pegarLivro(): void {
    this.livrosEmprestados++;
  }

  devolverLivro(): void {
    this.livrosEmprestados--;
  }
}
