const raios = [3, 7, 11];

const aoQuadrado = n => n ** 2;
const multiplicarPorPI = n => n * Math.PI;

const areas = raios.map(aoQuadrado).map(multiplicarPorPI);
console.log(areas);