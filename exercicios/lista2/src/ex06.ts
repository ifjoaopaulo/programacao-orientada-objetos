class Estoque {
  constructor(
    private itens: Map<string, number> = new Map(),
  ) { }

  entrada(codigo: string, qtd: number): void {
    if (this.itens.has(codigo)) {
      this.itens.set(codigo, this.itens.get(codigo)! + qtd);
    } else {
      this.itens.set(codigo, qtd);
    }
  }

  saida(codigo: string, qtd: number): void {
    if (this.itens.has(codigo) === false) {
      console.log(`Código não encontrado: ${codigo}`);
    } else {
      this.itens.set(codigo, this.itens.get(codigo)! - qtd);
    }
  }

  quantidade(codigo: string): number {
    let busca: number | undefined = this.itens.get(codigo);
    return busca === undefined ? 0 : busca;
  }

  relatorio(): void {
    for (const [codigo, qtd] of this.itens) {
      console.log(`${codigo}: ${qtd}`);
    }
  }

  codigosDiferentes(): number {
    let codDif: number = 0;
    for (const [codigo] of this.itens) {
      if (this.itens.has(codigo)) {
        codDif += 1;
      }
    }

    return codDif;
  }
}

const estoque: Estoque = new Estoque();

estoque.entrada('LIV-001', 10);
estoque.entrada('LIV-002', 4);
estoque.entrada('LIV-001', 5);

estoque.saida('LIV-002', 1);
estoque.saida('LIV-999', 1);

estoque.relatorio();
console.log(`Quantidade de LIV-001: ${estoque.quantidade('LIV-001')}`);
console.log(`Quantidade de LIV-999: ${estoque.quantidade('LIV-999')}`);
console.log(`Quantidade de códigos diferentes: ${estoque.codigosDiferentes()}`);
