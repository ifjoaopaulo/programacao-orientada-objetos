import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class CalculadoraService {
  somar(num1: number, num2: number): number {
    return num1 + num2;
  }

  subtrair(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new BadRequestException('Divisão por 0 não é permitida!');
    }

    return num1 / num2;
  }
}
