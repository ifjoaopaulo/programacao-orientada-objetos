/**
 * Aula 03 — a classe mãe e as duas filhas.
 * Executar:  npx ts-node main.ts
 */
export class ItemAcervo {
  readonly titulo: string;
  protected disponivel: boolean;   // protected: as filhas enxergam, o resto não

  constructor(titulo: string) {
    this.titulo = titulo;
    this.disponivel = true;
  }

  emprestar(): void {
    this.disponivel = false;
  }

  devolver(): void {
    this.disponivel = true;
  }

  estaDisponivel(): boolean {
    return this.disponivel;
  }

  descricao(): string {
    return this.titulo;
  }
}

export class Livro extends ItemAcervo {
  readonly autor: string;

  constructor(titulo: string, autor: string) {
    super(titulo);          // primeiro a parte "ItemAcervo"...
    this.autor = autor;     // ...depois a parte "Livro"
  }

  descricao(): string {
    return `${super.descricao()}, de ${this.autor}`;
  }
}

export class Revista extends ItemAcervo {
  readonly edicao: number;

  constructor(titulo: string, edicao: number) {
    super(titulo);
    this.edicao = edicao;
  }

  descricao(): string {
    return `${this.titulo} nº ${this.edicao}`;
  }
}
