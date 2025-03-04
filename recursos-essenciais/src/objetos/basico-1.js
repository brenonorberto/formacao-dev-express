// Objeto Literal => chave: "valor", (123 // true // false // [] // {})
const usuario = {
  id: 6439,
  nome: "João Pedro",
  email: "joao.pedro@empresa.com.br",
  senha: "$2y.13.alksdhjalksjdlak.aslkidjhaksjhdkasjh",
  ativo: true,
};

console.log(usuario.id);

usuario.nome = "João Pedro Pereira";

console.log(usuario.nome);
console.log(usuario.email);

console.log(usuario["nome"]);
console.log(usuario["email"]);
