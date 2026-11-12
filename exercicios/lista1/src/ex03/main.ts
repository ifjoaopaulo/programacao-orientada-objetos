import { Chamado } from "./chamado";
import { ChamadoBug } from "./chamadoBug";
import { ChamadoDuvida } from "./chamadoDuvida";

/*
  Como o protocolo depende do chamado para existir, se o chamado for apagado, o protocolo também será apagado.
*/

const chamados: Chamado[] = [];

let chamado1: ChamadoBug = new ChamadoBug('Login não funciona', 'Alta');
let chamado2: ChamadoBug = new ChamadoBug('Sistema em branco', 'Alta');
let chamado3: ChamadoBug = new ChamadoBug('Troca de temas não funciona', 'Baixa');
let chamado4: ChamadoDuvida = new ChamadoDuvida('Financeiro', 'Como emitir boleto');
let chamado5: ChamadoDuvida = new ChamadoDuvida('Financeiro', 'Como finalizar compra via cheque');

chamados.push(chamado1, chamado2, chamado3, chamado4, chamado5);

let qtdBugs: number = 0;
for (let chamado of chamados) {
  console.log(`PROT-${chamado.numeroProtocolo()} ${chamado.resumo()}`);

  if (chamado instanceof ChamadoBug) {
    qtdBugs++;
  }
}

console.log(`Bugs: ${qtdBugs}`);
