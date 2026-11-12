import { Veiculo } from './veiculo';

export class Carro extends Veiculo{
    private portas: number;

    constructor (placa:string, diaria:number, portas:number){
        super(placa, diaria);
        this.portas = portas;
    }
    descricao(): string{
        return `Carro ${this.placa}, ${this.portas} portas  - R$ ${this.diaria}/dia`
    }
}