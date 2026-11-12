interface FormaPagamento {
  nome(): string;
  valorFinal(valor: number): number;
}

class Dinheiro implements FormaPagamento {
  nome(): string {
    return `Dinheiro`;
  }

  valorFinal(valor: number): number {
    return valor - (valor / 20)
  }
}

class Cartao implements FormaPagamento {
  nome(): string {
    return `Cartão`;
  }

  valorFinal(valor: number): number {
    return valor + (valor / 10);
  }
}

class Pix implements FormaPagamento {
  nome(): string {
    return `Pix`;
  }

  valorFinal(valor: number): number {
    return valor;
  }
}

const pagamentos: FormaPagamento[] = [
  new Dinheiro(),
  new Cartao(),
  new Pix(),
];

let maisBarato: FormaPagamento = pagamentos[0];
for (let p of pagamentos) {
  console.log(`${p.nome()}: R$${p.valorFinal(200)}`);

  if (maisBarato.valorFinal(200) > p.valorFinal(200)) {
    maisBarato = p;
  }
}

console.log(`Forma mais barata: ${maisBarato.nome()}`);
