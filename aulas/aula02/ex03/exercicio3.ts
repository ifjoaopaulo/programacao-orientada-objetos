// Exercício 3: Achar o erro
class Produto {
  private preco: number;

  constructor(preco: number) { this.preco = preco; }

  getPreco(): number { return this.preco; }

  // setPreco(valor: number): void { this.preco = valor; } // Se a hipótese do erro ser o preço estar negativo, está parte está sem "verificação".

  setPreco(valor: number): void {
    if (valor < 0) {
      throw new Error(`Impossível colocar o preço do produto negativo!`);
    } else {
      this.preco = valor;
    }
  }
}

const p = new Produto(10);
p.setPreco(-500); // Não pode número negativo no preço?
