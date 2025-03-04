const id = 10654;
const nome = "Maria Júlia";
const email = "maria.julia@empresa.com.br";
const ativo = true;

function alterarUsuario() {
  console.log("alterando usuário...");
}

const usuario = { id, nome, email, ativo, alterarUsuario };
console.log(usuario);
usuario.alterarUsuario();
