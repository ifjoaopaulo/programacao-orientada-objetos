import { Atendimento } from "./atendimento";
import { Paciente } from "./paciente";
import { Medico } from "./medico";

export class Exame extends Atendimento {
  constructor(
    data: string,
    valor: number,
    paciente: Paciente,
    medico: Medico,
    private tipo: string,
  ) {
    super(data, valor, paciente, medico);
  }

  registro(): string {
    return `${this.data}: Atendimento de ${this.paciente.nome}\n` +
      `Por ${this.medico.nome} (CRM: ${this.medico.crm}) - Exame ${this.tipo}`;
  }
}
