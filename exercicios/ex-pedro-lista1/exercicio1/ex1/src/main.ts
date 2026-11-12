import { Veiculo } from './veiculo';
import { Carro } from './carro';
import { Moto } from './moto';

const v: Veiculo[] = [
    new Carro ("DAM - 4813", 175, 4),
    new Carro ("QAP - 7234", 225, 4),
    new Carro ("QED - 7821", 180, 2),
    new Moto ("DEF - 1877", 70, 100),
    new Moto ("RAL - 2214", 60, 150),
    new Moto ("POK - 4355", 200, 300),
]

for (const veiculo of v ){
    console.log(veiculo.descricao());
}

let somaDiarias = 0;
for (const veiculo of v ){
    somaDiarias += veiculo.valorDiaria();
}
console.log(`Soma das diárias: R$ ${somaDiarias}`);

let maisCaro = v[0];
for (const veiculo of v) {
  if (veiculo.valorDiaria() > maisCaro.valorDiaria()) {
    maisCaro = veiculo;
  }
}
console.log(`Veiculo mais caro por dia: ${maisCaro.descricao().split(" - ")[0]}`);