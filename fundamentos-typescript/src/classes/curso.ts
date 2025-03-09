import { Aula } from "./aula";

export class Curso {
  constructor(
    public nome: string,
    public autor: string,
    readonly descricao: string = "",
    readonly aulas: Aula[] = []
  ) {}

  get duracaoEmSegundo() {
    const duracoes = this.aulas.map((a) => a.duracaoEmSegundos);
    let total = 0;
    for (let duracao of duracoes) {
      total += duracao;
    }
    return total;
  }
}
