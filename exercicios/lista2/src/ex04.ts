class CaixaError extends Error { };

class ValorInvalidoError extends CaixaError { };

class SaldoInsuficienteError extends CaixaError { };

class CaixaEletronico {
  constructor(
    private saldo: number,
  ) { };

  sacar(valor: number): void {
    if (valor > this.saldo) {
      throw new SaldoInsuficienteError(`Saldo de R$${this.saldo}! Impossível sacar R$${valor}!`);
    }

    if (valor <= 0) {
      throw new ValorInvalidoError(`Valor invalido! Impossível sacar R$${valor}!`);
    }

    this.saldo -= valor;
    console.log(`Saque de R$${valor} efetuado. Saldo após saque: R$${this.saldo}`);
  }
}

const caixa: CaixaEletronico = new CaixaEletronico(100);

try {
  caixa.sacar(30);
} catch (erro) {
  if (erro instanceof ValorInvalidoError) {
    console.log(`Recusado: Valor inválido!`);
  } else if (erro instanceof SaldoInsuficienteError) {
    console.log(`Recusado: Saldo insuficiente!`);
  }
}

try {
  caixa.sacar(0);
} catch (erro) {
  if (erro instanceof ValorInvalidoError) {
    console.log(`Recusado: Valor inválido!`);
  } else if (erro instanceof SaldoInsuficienteError) {
    console.log(`Recusado: Saldo insuficiente!`);
  }
}

try {
  caixa.sacar(500);
} catch (erro) {
  if (erro instanceof ValorInvalidoError) {
    console.log(`Recusado: Valor inválido!`);
  } else if (erro instanceof SaldoInsuficienteError) {
    console.log(`Recusado: Saldo insuficiente!`);
  }
}

try {
  caixa.sacar(-10);
} catch (erro) {
  if (erro instanceof CaixaError) {
    console.log(`Erro do caixa: ${erro.message}`);
  }
}
