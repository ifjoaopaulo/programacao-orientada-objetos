class ClasseBase {
  public x: number = 10;
  protected y: number = 20;
  private z: number = 30;
}

class ClasseDerivada extends ClasseBase {
  public mostrarAtributos(): void {
    console.log(this.x);
    console.log(this.y);
    console.log(this.z); // Erro
  }
}

let obj: ClasseDerivada = new ClasseDerivada();
obj.mostrarAtributos();
console.log(obj.x);
console.log(obj.y); // Erro
console.log(obj.z); // Erro
