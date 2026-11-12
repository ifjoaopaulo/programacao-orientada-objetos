abstract class Certificado {
  constructor(
    protected aluno: string,
  ) { };

  abstract corpo(): string;

  emitir(): void {
    console.log(`=== ${this.aluno} ===\n` + this.corpo());
  }
}

class CertificadoCurso extends Certificado {
  constructor(
    aluno: string,
    private horas: number,
  ) {
    super(aluno)
  }

  corpo(): string {
    return `Concluiu o curso com ${this.horas} horas`;
  }
}

class CertificadoPalestra extends Certificado {
  constructor(
    aluno: string,
    private tema: string,
  ) {
    super(aluno)
  }

  corpo(): string {
    return `Assistiu à palestra ${this.tema}`;
  }
}

const certificados: Certificado[] = [
  new CertificadoCurso(`Ana Souza`, 40),
  new CertificadoPalestra(`Bruno Lima`, `Arquitetura de Software`),
];

for (let c of certificados) {
  c.emitir();
}
