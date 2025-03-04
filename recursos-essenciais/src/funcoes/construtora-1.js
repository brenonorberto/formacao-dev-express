function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falar = function() {
        return `${this.nome} está falando.`;
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.falar());

const p2 = new Pessoa('Maria', 'A.');
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.falar());