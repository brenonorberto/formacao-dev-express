(function () {
  // Consultas
  const tagH1 = document.querySelector("h1");
  console.log(tagH1);

  const conteudo = document.querySelector(".conteudo");
  console.log(conteudo);

  const itensLista = document.querySelectorAll("li");
  console.log(itensLista);

  const primeiroLugar = document.querySelector("[primeiro]");
  console.log(primeiroLugar.textContent);

  const tituloConteudo1 = document.querySelector("#titulo-conteudo");
  console.log(tituloConteudo1.textContent);

  const tituloConteudo2 = document.querySelector("div > span");
  console.log(tituloConteudo2.textContent);
})();

function adicionarItem() {
  const novoItem = document.createElement("li");
  novoItem.setAttribute("novo", "true");
  novoItem.classList.add("vermelho");
  novoItem.textContent = "Guilherme";

  const lista = document.querySelector("ul[aprovados]");
  lista.appendChild(novoItem);
}

function removerItensNovos() {
  const lista = document.querySelector("ul[aprovados]");
  const novosItens = document.querySelectorAll("li[novo]");
  novosItens.forEach((item) => {
    lista.removeChild(item);
  });
}
