import { Veiculo } from './veiculo';

export class Moto extends Veiculo {
  constructor(
    placa: string,
    diaria: number,
    private cilindradas: number,
  ) {
    super(placa, diaria);
  }

  descricao(): string {
    return `Moto ${this.placa}, ${this.cilindradas}cc - R$${this.diaria}/dia`;
  }
}
