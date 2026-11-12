import { Veiculo } from "./veiculo";
import { Carro } from "./carro";
import { Moto } from "./moto";

const locadora: Veiculo[] = [];

let carro1: Carro = new Carro('ABC-1234', 150, 4);
let carro2: Carro = new Carro('CDE-5678', 110, 4);
let moto1: Moto = new Moto('GHI-9012', 80, 300);
let moto2: Moto = new Moto('FJK-1212', 70, 250);

locadora.push(carro1, carro2, moto1, moto2);

console.log(locadora[0].descricao());
console.log(locadora[2].descricao());

let soma: number = 0;
let maisCaro: Veiculo = locadora[0];
for (let item of locadora) {
  soma += item.valorDiaria();
  if (item.valorDiaria() > maisCaro.valorDiaria()) {
    maisCaro = item;
  }
}

console.log(`Soma das diárias: R$${soma}`);
console.log(`Mais caro por dia: ${maisCaro.descricao()}`);
