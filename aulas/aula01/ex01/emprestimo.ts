export class Emprestimo {
  nomeUsuario: string;
  tituloLivro: string;
  diasEmprestado: number;

  constructor(nomeUsuario: string, tituloLivro: string, diasEmprestado: number) {
    this.nomeUsuario = nomeUsuario;
    this.tituloLivro = tituloLivro;
    this.diasEmprestado = diasEmprestado;
  }

  estaAtrasado(): boolean {
    if(this.diasEmprestado > 14) {
      return true;
    } else {
      return false;
    }
  }

  multa(): number {
    if(this.estaAtrasado() === false) {
      return 0;
    } else {
      return 2 * (this.diasEmprestado - 14);
    }
  }
}
