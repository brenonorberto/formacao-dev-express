const notas = [10, 6.5, 8, 7.5, 9, 8.5, 7, 6, 3.8];

let total = 0;

for(let nota of notas) {
    total += nota;
}

const media = total / notas.length;
console.log(`A média é ${media}`);

for(let i in notas) {
    console.log(i, notas[i]);
}