import { Repository } from 'typeorm';
import { Livro } from './livro';
export declare class LivrosService {
    private readonly repositorio;
    constructor(repositorio: Repository<Livro>);
    listar(): Promise<Livro[]>;
    buscar(id: number): Promise<Livro>;
    buscarPorAutor(autor: string): Promise<Livro[]>;
    apagar(id: number): Promise<Livro>;
}
