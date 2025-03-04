const notas = [10, 6.5, 8, 7.5, 9, 8.5, 7, 6, 3.8];

let total = 0;

for(let i = 0; i < notas.length; i++) {
    total += notas[i];
}

const media = total / notas.length;

console.log(`A média é ${media}`);

console.log(0.1 + 0.2); // IEEE 754