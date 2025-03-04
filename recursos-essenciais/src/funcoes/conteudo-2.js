function somar(a) {
    return function (b) {
        return a + b;
    }
}

const somarComQuatro = somar(4);
const somarComMil = somar(1000);

console.log(somarComQuatro(5));
console.log(somarComQuatro(10));
console.log(somarComMil(100));
console.log(somarComMil(1));

console.log(somar(3)(7));
console.log(somar(5)(5));
