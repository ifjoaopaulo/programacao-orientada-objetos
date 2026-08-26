export class ContaBancaria {
  // private titular: string;
  // private saldo: number;

  constructor(private titular: string, private saldo: number) {
    // this.titular = nome;
    // this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor < 0) {
      throw new Error("Impossível depositar valor menor que 0!");
    } else {
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
    if ((this.saldo - valor) >= 0) {
      this.saldo -= valor;
    } else {
      throw new Error("Saldo abaixo de 0!");
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}
