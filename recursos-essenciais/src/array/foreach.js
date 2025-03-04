const aprovados = [
    'Agatha',
    'Aldo',
    'Daniel',
    'Raquel',
    'Miguel',
    'Ana',
    'Maria',
    'João'
]

function exibirElemento(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
}

aprovados.forEach(exibirElemento);
aprovados.forEach(el => console.log(el));