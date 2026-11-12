import { ItemNota } from "./itemNota";
import { Cliente } from "./cliente";
import { Nota } from "./nota";
import { NotaServico } from "./notaServico";
import { NotaProduto } from "./notaProduto";

let cliente1: Cliente = new Cliente('Padaria Central', '123456789101112');
let cliente2: Cliente = new Cliente('Mercado da Esquina', '121110987654321');

const notas: Nota[] = [];

let item1: ItemNota = new ItemNota('Caixa de Água', 1000);
let item2: ItemNota = new ItemNota('Desencanador', 50);
let item3: ItemNota = new ItemNota('Balde de Tinta', 100);

let nota1: NotaProduto = new NotaProduto('001', cliente1, 'Correios');
let nota2: NotaServico = new NotaServico('002', cliente2, 'Encanamento');
let nota3: NotaProduto = new NotaProduto('003', cliente2, 'Sedex');
let nota4: NotaServico = new NotaServico('004', cliente1, 'Pintura de parede');

nota1.adicionarItem('Caixa de Água', 1000);
nota1.adicionarItem('Cano PVC', 50);
nota1.adicionarItem('Caixa de Água', 1000);
nota2.adicionarItem('Rolo', 40);
nota2.adicionarItem('Pincel', 30);
nota2.adicionarItem('Tinta', 100);
nota3.adicionarItem('Cano PVC', 50);
nota3.adicionarItem('Vaso sanitário', 500);
nota3.adicionarItem('Desencanador', 50);
nota4.adicionarItem('Azulejo', 100);
nota4.adicionarItem('Chuveiro', 500);
nota4.adicionarItem('Caixa de Água', 1000);

notas.push(nota1, nota2, nota3, nota4);

let soma: number = 0;
let qtdCliente1: number = 0, qtdCliente2: number = 0;
for (let nota of notas) {
  console.log(nota.descricao());

  soma += nota.total();

  if (nota.pertenceAoCliente(cliente1)) {
    qtdCliente1 += nota.total();
  } else if (nota.pertenceAoCliente(cliente2)) {
    qtdCliente2 += nota.total();
  }
}

console.log(`Faturamento: R$${soma}`);
if (qtdCliente1 > qtdCliente2) {
  console.log(`O cliente que comprou mais foi ${cliente1.nome} (R$${qtdCliente1})`);
} else {
  console.log(`O cliente que comprou mais foi ${cliente2.nome} (R$${qtdCliente2})`);
}
