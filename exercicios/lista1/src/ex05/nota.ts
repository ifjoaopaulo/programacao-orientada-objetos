import { Cliente } from "./cliente";
import { ItemNota } from "./itemNota";

export class Nota {
  constructor(
    protected numero: string,
    protected cliente: Cliente,
    protected itens: ItemNota[] = [],
  ) { }

  adicionarItem(descricao: string, valor: number): void {
    this.itens.push(new ItemNota(descricao, valor));
  }

  total(): number {
    let soma: number = 0;

    for (let item of this.itens) {
      soma += item.valor;
    }

    return soma;
  }

  descricao(): string {
    return `NF-${this.numero} - ${this.cliente.nome} - R$${this.total()}`;
  }

  pertenceAoCliente(cliente: Cliente): boolean {
    return this.cliente === cliente;
  }
}
