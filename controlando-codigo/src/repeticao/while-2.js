let nota = 0;

// Indicado para uma quantidade INDETERMINADA de iterações
while (nota <= 9) {
    console.log('Você precisa ser aprovado com louvor!');
    nota = +(Math.random() * 10).toFixed(2);
}

console.log(`A nota ${nota} foi excelente!`);