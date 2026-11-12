"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const livro_1 = require("./livro");
let LivrosService = class LivrosService {
    repositorio;
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    async listar() {
        return await this.repositorio.find();
    }
    async buscar(id) {
        const livro = await this.repositorio.findOneBy({ id });
        if (livro === null) {
            throw new common_1.NotFoundException(`Livro ${id} não existe`);
        }
        return livro;
    }
    async buscarPorAutor(autor) {
        return await this.repositorio.findBy({ autor });
    }
    async apagar(id) {
        return await this.repositorio.remove(await this.buscar(id));
    }
};
exports.LivrosService = LivrosService;
exports.LivrosService = LivrosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(livro_1.Livro)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LivrosService);
//# sourceMappingURL=livros.service.js.map