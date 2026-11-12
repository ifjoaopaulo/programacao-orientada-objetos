export class Protocolo {
  private static proxNumero = 0;

  constructor(
    public numero: number = Protocolo.proxNumero++,
    public abertoEm: Date = new Date(),
  ) { }
}
