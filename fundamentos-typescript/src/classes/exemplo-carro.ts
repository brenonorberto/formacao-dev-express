import { Carro } from "./carro";

let civic = new Carro();
civic.marca = "Honda";

civic.acelerar();
civic.acelerar();
civic.acelerar();

// civic.velocidadeAtual = 160;

console.log(civic);
// console.log(civic.getVelocidadeAtual());
console.log(civic.velocidadeAtual);
