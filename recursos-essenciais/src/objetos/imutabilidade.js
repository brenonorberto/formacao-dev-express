const produto = Object.freeze({
  id: 3,
  nome: "Caneta BIC Azul",
  valor: 5.89,
  categoria: "Escritório",
});

produto.valor = 4.99;
produto.ativo = true;

console.log(produto);
