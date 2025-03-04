const MIN = 0;
const MAX = 10;

let valorTotal = 0;

for (let i = MIN; i <= MAX; i++) {
    if (i % 2 === 0) {
        valorTotal += i;
    }
}

console.log(`O valor total é ${valorTotal}.`)