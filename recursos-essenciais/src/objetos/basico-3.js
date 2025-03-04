const calculadora = {
  somar(a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: (a, b) => a * b,
};

console.log(calculadora.somar(2, 6));
console.log(calculadora.subtrair(2, 6));
console.log(calculadora.multiplicar(2, 6));
