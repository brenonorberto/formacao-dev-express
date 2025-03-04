let precoDoProduto = 129.9
let desconto = 0.3

// let precoComDesconto = precoDoProduto * (1 - desconto);
let precoComDesconto = precoDoProduto - (precoDoProduto * desconto);
console.log("O preço com desconto é", precoComDesconto);