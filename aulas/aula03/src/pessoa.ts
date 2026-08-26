class Pessoa {
  // Protected funciona diferente de private quando se fala de herança. Pois a classe "filha" pode acessar essas propriedades da classe "pai".
  protected nome: string;
  protected telefone: string;

  constructor(nome: string, telefone: string) {
    this.nome = nome;
    this.telefone = telefone;
  }

  descricao(): string {
    return `${this.nome} - ${this.telefone}`;
  }
}

class PessoaFisica extends Pessoa {
  protected cpf: string;

  constructor(nome: string, telefone: string, cpf: string) {
    super(nome, telefone);
    this.cpf = cpf;
  }
}

class PessoaJuridica extends Pessoa {
  protected cnpj: string;

  constructor(nome: string, telefone: string, cnpj: string) {
    super(nome, telefone);
    this.cnpj = cnpj;
  }

  descricao(): string {
    return `${super.descricao()}, ${this.cnpj}`;
  }
}

let p = new Pessoa("nome", "telefone");
let pf = new PessoaFisica("Yuri", "1234-5678", "012.345.678-90");
let pj = new PessoaJuridica("Bob", "4002-8922", "12.123.456/10");

console.log(pj.descricao());
