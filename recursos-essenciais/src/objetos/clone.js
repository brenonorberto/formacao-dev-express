const usuario = Object.freeze({
  id: 123,
  nome: "Rafael Silva",
  email: "rafa.silva@email.com.br",
  admin: false,
});

// Operador spread!
const novoUsuario = Object.freeze({ ...usuario, admin: true });

console.log(usuario);
console.log(novoUsuario);

const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];

numeros[1] = 2.6;
maisNumeros[1] = 2.4;

console.log(numeros, maisNumeros);
