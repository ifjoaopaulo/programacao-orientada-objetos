class Pessoa {
  nome: string = "";
  idade: number = 0;
  private cpf: string = "";

  setCPF(cpf: string): void {
    this.cpf = cpf
      .replaceAll(".", "")
      .replaceAll("-", "")
      .trim();
  };

  getCPF(): string { return this.cpf };
}

let p: Pessoa = new Pessoa();
p.idade = 50;
p.nome = "Bob";
// p.cpf = "123.456.789-00"; // Quando cpf é publico, isso é possível. Mas quando é private, isso dá erro.

// Para atribuir em uma propriedade private, é preciso usar métodos set e get para acessá-la
p.setCPF("123.456.789-00");
console.log(`CPF do BOB: ${p.getCPF()}`);
