import { Chamado } from "./chamado";
import { Protocolo } from "./protocolo";

export class ChamadoBug extends Chamado {
  constructor(
    titulo: string,
    private severidade: string,
    protocolo: Protocolo = new Protocolo(),
  ) {
    super(titulo);
  }

  resumo(): string {
    return `[bug ${this.severidade}] ${this.titulo}`;
  }
}
