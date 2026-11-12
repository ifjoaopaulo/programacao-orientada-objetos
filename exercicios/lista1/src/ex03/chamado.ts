import { Protocolo } from './protocolo';

export class Chamado {
  constructor(
    protected titulo: string,
    protected protocolo: Protocolo = new Protocolo(),
  ) { }

  resumo(): string {
    return `${this.titulo}`;
  }

  numeroProtocolo(): string {
    return `${this.protocolo.numero}`;
  }
}
