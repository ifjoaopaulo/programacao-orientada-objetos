import { Nota } from "./nota";
import { ItemNota } from "./itemNota";
import { Cliente } from "./cliente";

export class NotaServico extends Nota {
  constructor(
    numero: string,
    cliente: Cliente,
    private competencia: string,
    itens: ItemNota[] = [],
  ) {
    super(numero, cliente);
  }

  descricao(): string {
    return `NF-${this.numero} - ${this.cliente.nome} - R$${this.total()}\n` +
      `(Serviço: ${this.competencia})`;
  }
}
