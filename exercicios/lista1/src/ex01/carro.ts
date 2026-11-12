import { Veiculo } from "./veiculo";

export class Carro extends Veiculo {
  constructor(
    placa: string,
    diaria: number,
    private portas: number
  ) {
    super(placa, diaria);
  }

  descricao(): string {
    return `Carro ${this.placa}, ${this.portas} portas - R$${this.diaria}/dia`;
  }
}
