import { Aula } from "./aula";
import { Curso } from "./curso";

const aulas: Aula[] = [
  new Aula("Introdução", "https://...", 234),
  new Aula("Configuração do Ambiente", "https://...", 1234),
  new Aula("Criando o Projeto React", "https://...", 2234),
  new Aula("Primeiro Componente", "https://...", 562),
  new Aula("Segundo Componente", "https://...", 423),
];

const novoCurso = new Curso(
  "React Essencial",
  "Leonardo Leitão",
  "O curso de React Essencial vai abordar os principais fundamentos relacionados ...",
  aulas
);

novoCurso.nome = "Fundamentos de React";
console.log(novoCurso);
console.log(novoCurso.duracaoEmSegundo);
