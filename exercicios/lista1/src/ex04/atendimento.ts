import { Medico } from "./medico";
import { Paciente } from "./paciente";

export class Atendimento {
  constructor(
    protected data: string,
    protected valor: number,
    protected paciente: Paciente,
    protected medico: Medico,
  ) { }

  registro(): string {
    return `${this.data}: Atendimento de ${this.paciente.nome}\n` +
      `Por ${this.medico.nome} (CRM: ${this.medico.crm})`
  }

  dadosPaciente(): string {
    return `${this.paciente.nome} - ${this.paciente.convenio}`;
  }

  valorCobrado(): number {
    return this.valor;
  }

  pertenceAoMedico(medico: Medico): boolean {
    return this.medico === medico;
  }
}
