// Importando a biblioteca
const leia = require('readline-sync') //require é acessando

//Declarando variaveis
let nome, distancia // É possivel colocar as variaveis td na mesm  a linha

console.log("Digite o seu nome: ")
nome = leia.question()

console.log("\nDigite a distância percorrida na sua corrida: ") // o "\n" ele quebra uma linha no terminal
distancia = leia.questionFloat() //questionFloat usado para número quebrado

//Saída dos Dados
console.log("\nBom dia, " + nome )
console.log("\nA distância percorrida foi de: " + distancia)
