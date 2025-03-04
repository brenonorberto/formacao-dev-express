let trabalhoTerca = true;
let trabalhoQuinta = true;

// Operação lógica E (AND) -> &&
let comprarTV55 = trabalhoTerca && trabalhoQuinta;
console.log("Comprar TV 55:", comprarTV55);

// Operação lógica OU (OR) -> ||
let tomarSorvete = trabalhoTerca || trabalhoQuinta;
console.log("Tomar sorvete:", tomarSorvete);

// Operação lógica OU Exclusivo (XOR)
let comprarTV42 = trabalhoTerca != trabalhoQuinta;
console.log("Comprar TV 42:", comprarTV42);

// Operação lógica de NEGAÇÃO (NOT) -> !
let ficarMaisSaudavel = !tomarSorvete;
console.log("Ficou mais saudável:", ficarMaisSaudavel)