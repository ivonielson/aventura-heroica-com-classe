/*
Olá, me chamo Ivonielson, comecei fazer o curso de lógica de programação da dio.me.
Abaixo segue meu codigo para resolver o terceiro desafio.
Resolvi apresentar um codigo onde tem 4 Players na partida.
Tentarei usar todos os recursos ja estudados até o momento
*/
class Heroi {
    // O construtor é um método especial que é chamado quando a classe é instanciada.
    constructor(nome, idade, tipo) {
        // Aqui estamos inicializando as propriedades do herói com os valores passados como argumento.
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método que simula o ataque do herói.
    atacar() {
        let ataque; // Variável para armazenar a descrição do ataque.

        // Aqui estamos utilizando um switch para determinar o tipo de ataque conforme o tipo do herói.
        switch(this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case "guerreiro":
                ataque = "usando espada";
                break;
            case "monge":
                ataque = "usando artes marciais";
                break;
            case "ninja":
                ataque = "usando shuriken";
                break;
            default:
                ataque = "usando porrada";
                break;
        }
        console.log(`O ${this.tipo} ${this.nome}, atacou ${ataque}`);
    }
}

// Lista de guerreiros com seus respectivos atributos.
const guerreiros = [
    {nome:"IvoShow", idade: 50, tipo: "mago"},
    {nome:"IviNho", idade: 150, tipo: "guerreiro"},
    {nome:"Ivão", idade: 88, tipo: "monge"},
    {nome:"Ivo", idade: 20, tipo: "ninja"},
];

// Loop que cria e ataca cada guerreiro.
for (let i = 0; i < guerreiros.length; i++) {
    const jogador = guerreiros[i];
    const play = new Heroi(jogador.nome, jogador.idade, jogador.tipo); // Cria um novo herói.
    play.atacar(); // Chama o método de ataque do herói.
}
