import { Chamado } from "./chamado";
import { Protocolo } from "./protocolo";

export class ChamadoDuvida extends Chamado {
  constructor(
    titulo: string,
    private assunto: string,
    protocolo: Protocolo = new Protocolo(),
  ) {
    super(titulo);
  }

  resumo(): string {
    return `[Dúvida sobre ${this.assunto}] ${this.titulo}`;
  }
}
