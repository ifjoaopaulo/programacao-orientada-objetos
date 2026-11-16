import { Controller, Get, Query, ParseFloatPipe } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private readonly calculadoraService: CalculadoraService) { };

  @Get('/somar')
  somar(@Query('a', ParseFloatPipe) num1: number, @Query('b', ParseFloatPipe) num2: number): { resultado: number } {
    return { resultado: this.calculadoraService.somar(num1, num2) };
  }

  @Get('/subtrair')
  subtrair(@Query('a', ParseFloatPipe) num1: number, @Query('b', ParseFloatPipe) num2: number): { resultado: number } {
    return { resultado: this.calculadoraService.subtrair(num1, num2) };
  }

  @Get('/multiplicar')
  multiplicar(@Query('a', ParseFloatPipe) num1: number, @Query('b', ParseFloatPipe) num2: number): { resultado: number } {
    return { resultado: this.calculadoraService.multiplicar(num1, num2) };
  }

  @Get('/dividir')
  dividir(@Query('a', ParseFloatPipe) num1: number, @Query('b', ParseFloatPipe) num2: number): { resultado: number } {
    return { resultado: this.calculadoraService.dividir(num1, num2) };
  }
}
