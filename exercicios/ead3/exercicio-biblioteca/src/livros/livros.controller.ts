import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Livro } from './livro';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get()
  async listar(): Promise<Livro[]> {
    return await this.livrosService.listar();
  }

  @Get('autor/:nome')
  async buscarPorAutor(@Param('nome') nome: string): Promise<Livro[]> {
    return await this.livrosService.buscarPorAutor(nome);
  }

  @Get(':id')
  async buscar(@Param('id', ParseIntPipe) id: number): Promise<Livro> {
    return await this.livrosService.buscar(id);
  }
}
