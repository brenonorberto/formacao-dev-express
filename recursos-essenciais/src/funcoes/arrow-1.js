const gritar = (texto) => texto.toUpperCase();
const exagerar = (texto) => {
    return texto + '!!!';
};


console.log(gritar('olá'));
console.log(exagerar(gritar('olá')));