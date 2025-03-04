function Contador(valorInicial = 0) {
    this.numero = valorInicial;

    this.incrementar = function () {
        this.numero++;
    }

    this.decrementar = function () {
        this.numero--;
    }
}

// Criar um objeto ou instanciar um objeto
const contador = new Contador(1000);
console.log(contador.numero);

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.numero);

contador.decrementar();
contador.decrementar();

console.log(contador.numero);

const outroContador = new Contador(10);

console.log(outroContador.numero);
console.log(contador.numero);