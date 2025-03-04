const MIN = -562;
const MAX = 413;

let qtdeParesPositivos = 0;
let qtdeImparesNegativos = 0;

for (let i = MIN; i <= MAX; i++) {
    if (i > 0 && i % 2 === 0) {
        qtdeParesPositivos++;
    } else if (i < 0 && i % 2 === -1) {
        qtdeImparesNegativos++;
    }
}

console.log(`Quantidade de pares positivos: ${qtdeParesPositivos}`);
console.log(`Quantidade de ímpares negativos: ${qtdeImparesNegativos}`);