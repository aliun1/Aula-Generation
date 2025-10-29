//Importando a biblioteca
const leia = require('readline-sync') //require é acessando

//Variaveis
let celsius, fahrenheit

//Entrada de dados
celsius = leia.questionFloat("Insira a temperatuda em Celsius: ")

//Processamento
fahrenheit = celsius * 1.8 + 32

//Saída de Dados
console.log("A temperatura em fahrenheit é: " + fahrenheit)
//console.log("A temperatura em fahrenheit é: %f", fahrenheit) //essa é a segunda maneira de fazer

