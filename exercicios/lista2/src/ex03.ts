interface Sensor {
  nome(): string;
  ler(): number;
  unidade(): string;
}

class Temperatura implements Sensor {
  constructor(
    private valor: number,
  ) { }

  nome(): string {
    return `Temperatura`;
  }

  ler(): number {
    return this.valor;
  }

  unidade(): string {
    return `ºC`;
  }
}

class Umidade implements Sensor {
  constructor(
    private valor: number,
  ) { }

  nome(): string {
    return `Umidade`;
  }

  ler(): number {
    return this.valor;
  }

  unidade(): string {
    return `%`;
  }
}

class Painel {
  mostrar(sensor: Sensor): void {
    console.log(`${sensor.nome()}: ${sensor.ler()}${sensor.unidade()}`);
  }
}

let temperatura: Temperatura = new Temperatura(23.5);
let umidade: Umidade = new Umidade(61);

const painel: Painel = new Painel();
painel.mostrar(temperatura);
painel.mostrar(umidade);

class VelocidadeVento implements Sensor {
  constructor(
    private valor: number,
  ) { }

  nome(): string {
    return `Velocidade do vento`;
  }

  ler(): number {
    return this.valor;
  }

  unidade(): string {
    return `km/h`;
  }
}

let velvento: VelocidadeVento = new VelocidadeVento(10);
painel.mostrar(velvento);
