export class Livro {
  autor: string;
  titulo: string;
  disponivel: boolean;

  constructor(autor: string, titulo: string, disponivel: boolean) {
    this.autor = autor;
    this.titulo = titulo;
    this.disponivel = disponivel;
  }
  
  emprestar(): void {
    this.disponivel  = false;
  }

  devolver(): void {
    this.disponivel  = true;
  }
  
  descricao(): string {
    return `${this.titulo}, ${this.autor}`;
  }
}
