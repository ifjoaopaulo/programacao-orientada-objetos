// Implementar a Classe Stack
// Métodos:
// - push
// - pop 
// - isEmpty 

export class Stack<T> {
  constructor(private stack: T[]) { };

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0 ? true : false;
  }
}
