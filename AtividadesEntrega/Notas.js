// Importa o módulo readline-sync
const leia = require('readline-sync')

//Entrada de Dados
let nota1 = leia.questionFloat("Digite a nota 1: ")
let nota2 = leia.questionFloat("Digite a nota 2: ")
let nota3 = leia.questionFloat("Digite a nota 3: ")
let nota4 = leia.questionFloat("Digite a nota 4: ")

//Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4

//Saída
console.log("A média final é: " + media.toFixed(1))


