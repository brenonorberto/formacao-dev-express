const calculadora = {
  resultado: 0,
  somar(a) {
    this.resultado += a;
    return this.resultado;
  },
  zerar() {
    this.resultado = 0;
  },
};

calculadora.somar(3);
calculadora.somar(7);
calculadora.somar(15);

console.log(calculadora.resultado);

calculadora.zerar();
console.log(calculadora.resultado);
