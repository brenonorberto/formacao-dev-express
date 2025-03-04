let nota = 10;

// Indicado para uma quantidade INDETERMINADA de iterações
do {
    console.log('Você precisa ser aprovado com louvor!');
    nota = +(Math.random() * 10).toFixed(2);
} while (nota <= 9);

console.log(`A nota ${nota} foi excelente!`);