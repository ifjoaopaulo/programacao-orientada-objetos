import { Atendimento } from "./atendimento";
import { Paciente } from "./paciente";
import { Medico } from "./medico";
import { Consulta } from "./consulta";
import { Exame } from "./exame";

let medico1: Medico = new Medico('Gabriely', '12345');
let medico2: Medico = new Medico('Pedro', '67890');

let paciente1: Paciente = new Paciente('João', 'Unimed');
let paciente2: Paciente = new Paciente('Elisa', 'Unimed');
let paciente3: Paciente = new Paciente('José', 'Plano Vida');

const atendimentos: Atendimento[] = [];

let consulta1: Consulta = new Consulta('01/09', 200, paciente1, medico2, 'Odontologia');
let consulta2: Consulta = new Consulta('01/09', 350, paciente2, medico1, 'Cardiologia');
let consulta3: Consulta = new Consulta('01/09', 150, paciente1, medico1, 'Nutrição');
let consulta4: Consulta = new Consulta('01/09', 100, paciente2, medico1, 'Nutrição');
let exame1: Exame = new Exame('01/09', 450, paciente3, medico2, 'Vista');
let exame2: Exame = new Exame('01/09', 400, paciente3, medico2, 'Toxicológico');

atendimentos.push(consulta1, consulta2, consulta3, consulta4, exame1, exame2);

let faturamento: number = 0;
let qtdMedico1: number = 0, qtdMedico2: number = 0;
for (let atendimento of atendimentos) {
  console.log(`${atendimento.dadosPaciente()}\n${atendimento.registro()}`);
  faturamento += atendimento.valorCobrado();

  if (atendimento.pertenceAoMedico(medico1)) {
    qtdMedico1++;
  } else if (atendimento.pertenceAoMedico(medico2)) {
    qtdMedico2++;
  }
}

console.log(`Faturamento: R$${faturamento}`);
console.log(`Quantidade de atendimentos de ${medico1.nome}: ${qtdMedico1}`);
console.log(`Quantidade de atendimentos de ${medico2.nome}: ${qtdMedico2}`);
