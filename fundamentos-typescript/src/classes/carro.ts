export class Carro {
  marca: string;
  private _velocidadeAtual: number = 0;

  get velocidadeAtual() {
    return this._velocidadeAtual;
  }

  //   set velocidadeAtual(novaVelocidade: number) {
  //     if (novaVelocidade >= 220) return;
  //     this._velocidadeAtual = novaVelocidade;
  //   }

  acelerar(): void {
    this._velocidadeAtual += 5;
  }
}
