class Usuario {
  private _email: string = '';

  set email(valor: string) {
    if (!valor.includes('@')) {
      return;
    }
    this._email = valor;
  }

  get email(): string {
    return this._email;
  }
}

let usuario1: Usuario = new Usuario();

usuario1.email = "josesantos@gmail.com";
console.log(`Email do José: ${usuario1.email}`);
