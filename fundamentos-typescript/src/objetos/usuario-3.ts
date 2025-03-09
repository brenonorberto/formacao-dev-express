import { StatusUsuario } from "./status-usuario";
import { Usuario } from "./usuario";

let novoUsuario: Partial<Usuario> = {
  nome: "Maria Gonçalves",
  status: StatusUsuario.ATIVO,
};

console.log(novoUsuario.nome);
console.log(novoUsuario.email);
