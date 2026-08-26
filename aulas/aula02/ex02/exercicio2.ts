import { ContaBancaria } from './conta-bancaria';

let conta1: ContaBancaria = new ContaBancaria("João", 100);

conta1.depositar(50);
console.log(conta1.consultarSaldo());

// conta1.sacar(500); // Erro! Pois não é possível sacar mais do que tem na conta
// conta1.depositar(-30); // Erro! Pois não é possível sacar quantidades negativas
// conta1.saldo = 100000; // Erro! Pois .saldo é private
