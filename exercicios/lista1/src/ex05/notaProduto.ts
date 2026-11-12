import { Nota } from './nota';
import { Cliente } from './cliente';
import { ItemNota } from './itemNota';

export class NotaProduto extends Nota {
  constructor(
    numero: string,
    cliente: Cliente,
    private transportadora: string,
    itens: ItemNota[] = [],
  ) {
    super(numero, cliente);
  }

  descricao(): string {
    return `NF-${this.numero} - ${this.cliente.nome} - R$${this.total()}\n` +
      `(Produto, via ${this.transportadora})`;
  }
}
