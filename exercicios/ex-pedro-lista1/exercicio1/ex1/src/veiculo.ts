export class Veiculo{
    protected placa: string;
    protected diaria: number;

    constructor(placa:string, diaria:number){
        this.placa = placa;
        this.diaria = diaria;
    }

    public descricao(): string{
        return `Veículo ${this.placa} - R$ ${this.diaria}/dia`;
    }

    public valorDiaria(): number{
        return this.diaria;
    }
}
