import { Veiculo } from './veiculo';

export class Moto extends Veiculo{
    private cilindradas: number;

    constructor(placa:string, diaria:number, cilindradas:number){
        super(placa, diaria);
        this.cilindradas = cilindradas;
    }
    descricao(): string{
        return `Moto ${this.placa}, ${this.cilindradas}cc  - R$ ${this.diaria}/dia`
    }
}