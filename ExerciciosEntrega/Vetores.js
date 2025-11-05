const input = require("readline-sync");

let vetor = [23, 5, 17, 42, 8, 31, 90, 12, 77, 3];

console.log("Vetor atual:", vetor);

let numero = input.questionInt("Digite um número para pesquisar: ");

let posicao = vetor.indexOf(numero);

if (posicao !== -1) {
    console.log(`O número ${numero} está na posição ${posicao} do vetor.`);
} else {
    console.log("Número não encontrado! Digite um número presente no vetor.");
}