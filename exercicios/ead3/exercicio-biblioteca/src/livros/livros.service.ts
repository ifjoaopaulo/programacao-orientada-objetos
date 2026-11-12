import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from './livro';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private readonly repositorio: Repository<Livro>,
  ) {}

  async listar(): Promise<Livro[]> {
    return await this.repositorio.find();
  }

  async buscar(id: number): Promise<Livro> {
    const livro = await this.repositorio.findOneBy({ id });
    if (livro === null) {
      throw new NotFoundException(`Livro ${id} não existe`);
    }
    return livro;
  }

  async buscarPorAutor(autor: string): Promise<Livro[]> {
    return await this.repositorio.findBy({ autor });
  }
}
