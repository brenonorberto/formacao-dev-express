import { StatusUsuario } from "./status-usuario";
import { Usuario } from "./usuario";

let usuarioLogado: Usuario = {
  id: 234,
  nome: "João Gabriel Silva",
  email: "jgs@empresa.com.br",
  status: StatusUsuario.ATIVO,
};

console.log(usuarioLogado.nome);
console.log(usuarioLogado.email);
