export class Veiculo {
  constructor(
    protected placa: string,
    protected diaria: number,
  ) { }

  descricao(): string {
    return `Veículo ${this.placa} - R$${this.diaria}/dia`;
  }

  valorDiaria(): number { return this.diaria };
}
