/*
    Versão #1
    ----------------------------------------------
    1. Criar uma interface Produto
        - id, nome, preco, marca
    2. Criar vários produtos e armazenar em um array
    3. Laço em todos os produtos
    4. Calcular valor total de todos os produtos
*/

import { ItemCarrinho } from "./item-carrinho"
import { Produto } from "./produto"

const catalogo: Produto[] = [
  { id: 1, nome: "Notebook Gamer", preco: 7500.0, marca: "Acer" },
  { id: 2, nome: "Smartphone 5G", preco: 3500.0, marca: "Samsung" },
  { id: 3, nome: "Smartwatch Fitness", preco: 1200.0, marca: "Apple" },
  { id: 4, nome: "Fone de Ouvido Bluetooth", preco: 800.0, marca: "Sony" },
  { id: 5, nome: "Monitor 4K", preco: 2500.0, marca: "LG" },
  { id: 6, nome: "Teclado Mecânico RGB", preco: 450.0, marca: "Razer" },
  { id: 7, nome: "Mouse Sem Fio", preco: 300.0, marca: "Logitech" },
  { id: 8, nome: "SSD 1TB", preco: 550.0, marca: "Kingston" },
  { id: 9, nome: "Caixa de Som Portátil", preco: 400.0, marca: "JBL" },
  { id: 10, nome: "Webcam Full HD", preco: 200.0, marca: "Microsoft" },
]

let totalDosProdutos = 0

for (let produto of catalogo) {
  totalDosProdutos += produto.preco
}

console.log(`O total geral é R$ ${totalDosProdutos}.`)

/*
    Versão #2
    ----------------------------------------------
    1. Criar uma interface Produto
        - id, nome, preco, marca
    2. Criar uma interface ItemCarrinho
        - produto, quantidade
    3. Criar vários produtos e armazenar em um array
    4. Criar vários itens e armazenar em um array
    5. Laço para cada item...
        - multiplicar a quantidade pelo preço do produto
    6. Calcular o valor total de todos os itens do carrinho
*/

const carrinho: ItemCarrinho[] = [
  { produto: catalogo[2], quantidade: 3 },
  { produto: catalogo[0], quantidade: 1 },
  { produto: catalogo[7], quantidade: 2 },
  { produto: catalogo[5], quantidade: 10 },
]

const totaisPorItem = carrinho.map((item) => {
  return item.produto.preco * item.quantidade
})

let totalDoCarrinho = 0

for (let itemTotal of totaisPorItem) {
  totalDoCarrinho += itemTotal
}

console.log(`O total do carrinho é R$ ${totalDoCarrinho}.`)
