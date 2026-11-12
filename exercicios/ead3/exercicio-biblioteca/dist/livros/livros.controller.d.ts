import { Livro } from './livro';
import { LivrosService } from './livros.service';
export declare class LivrosController {
    private readonly livrosService;
    constructor(livrosService: LivrosService);
    listar(): Promise<Livro[]>;
    buscarPorAutor(nome: string): Promise<Livro[]>;
    buscar(id: number): Promise<Livro>;
    apagar(id: number): Promise<Livro>;
}
