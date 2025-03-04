const curso = {
  id: 123,
  nome: "Javascript Essencial",
  duracao: 10000, // em segundo -> 2h 46m 33s
  aulas: [{}, {}, {}, {}],
};

curso.ativo = true; // adicionou um atributo
delete curso.aulas; // removido um atributo

console.log(curso);
