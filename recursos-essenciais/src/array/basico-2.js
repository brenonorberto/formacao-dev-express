const coisas = ['texto', 1.56, false, [1, 2, 3], {nome: 'Sicrano'}]

console.log(coisas.length);

// adicionando elementos no array
coisas.push('novo item');
coisas.push(10);

coisas.unshift('primeiro item');

// removendo elementos do array
const removido1 = coisas.pop();
const removido2 = coisas.shift();

console.log(removido1, removido2);

console.log(coisas);