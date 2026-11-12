class Pilha<T> {
  constructor(
    private itens: T[],
  ) { }

  empilhar(item: T): void {
    this.itens.push(item);
  }

  desempilhar(): T {
    let temp: T = this.itens[this.itens.length - 1]
    this.itens.length = this.itens.length - 1;

    return temp;
  }

  vazia(): boolean {
    return this.itens.length === 0;
  }

  tamanho(): number {
    return this.itens.length;
  }
}

const pilha1: Pilha<string> = new Pilha<string>(
  [`Ana`, `Bruno`, `Carla`],
)

const pilha2: Pilha<number> = new Pilha<number>(
  [10, 25, 7],
)

console.log(`Tamanho da pilha 1: ${pilha1.tamanho()}`);
while (pilha1.vazia() !== true) {
  console.log(`Desempilhado ${pilha1.desempilhar()}`);
}
console.log(`Pilha 1 está vazia? ${pilha1.vazia()}`);

let soma: number = 0;
while (pilha2.vazia() !== true) {
  soma += pilha2.desempilhar();
}
console.log(`Soma: ${soma}`);
console.log(`Pilha 2 está vazia? ${pilha2.vazia()}`);
