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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosController = void 0;
const common_1 = require("@nestjs/common");
const livros_service_1 = require("./livros.service");
let LivrosController = class LivrosController {
    livrosService;
    constructor(livrosService) {
        this.livrosService = livrosService;
    }
    async listar() {
        return await this.livrosService.listar();
    }
    async buscarPorAutor(nome) {
        return await this.livrosService.buscarPorAutor(nome);
    }
    async buscar(id) {
        return await this.livrosService.buscar(id);
    }
    async apagar(id) {
        return await this.livrosService.apagar(id);
    }
};
exports.LivrosController = LivrosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LivrosController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('autor/:nome'),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LivrosController.prototype, "buscarPorAutor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LivrosController.prototype, "buscar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LivrosController.prototype, "apagar", null);
exports.LivrosController = LivrosController = __decorate([
    (0, common_1.Controller)('livros'),
    __metadata("design:paramtypes", [livros_service_1.LivrosService])
], LivrosController);
//# sourceMappingURL=livros.controller.js.map