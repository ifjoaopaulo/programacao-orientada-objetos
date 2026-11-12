const soma = (x: number, y: number): number => x + y;
console.log(soma(1, 2));

function math(funcao: (x: number, y: number) => number, a: number, b: number): void {
  console.log(funcao(a, b));
}

math(soma, 1, 2);
