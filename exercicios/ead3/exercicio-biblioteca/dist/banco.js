"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcoesBanco = void 0;
const livro_1 = require("./livros/livro");
exports.opcoesBanco = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'biblioteca',
    entities: [livro_1.Livro],
    synchronize: true,
};
//# sourceMappingURL=banco.js.map