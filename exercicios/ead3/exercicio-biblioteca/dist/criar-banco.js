"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const banco_1 = require("./banco");
const livro_1 = require("./livros/livro");
async function criarBanco() {
    const servidor = new typeorm_1.DataSource({ ...banco_1.opcoesBanco, database: 'postgres' });
    await servidor.initialize();
    await servidor.createQueryRunner().createDatabase('biblioteca', true);
    await servidor.destroy();
    const banco = new typeorm_1.DataSource(banco_1.opcoesBanco);
    await banco.initialize();
    const repositorio = banco.getRepository(livro_1.Livro);
    if ((await repositorio.count()) > 0) {
        console.log('a tabela livros já tem dados');
    }
    else {
        await repositorio.save([
            { titulo: 'Dom Casmurro', autor: 'Machado de Assis', ano: 1899 },
            { titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', ano: 1881 },
            { titulo: 'Vidas Secas', autor: 'Graciliano Ramos', ano: 1938 },
            { titulo: 'O Cortiço', autor: 'Aluísio Azevedo', ano: 1890 },
            { titulo: 'Capitães da Areia', autor: 'Jorge Amado', ano: 1937 },
            { titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', ano: 1977 },
        ]);
        console.log('6 livros cadastrados');
    }
    await banco.destroy();
}
criarBanco();
//# sourceMappingURL=criar-banco.js.map