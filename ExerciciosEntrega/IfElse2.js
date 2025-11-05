const input = require('readline-sync')

let numero

numero = input.questionInt("Insira um numero aqui: ")

if(numero > 0 && numero % 2 == 0){
    console.log("O número inserido : "+numero+ " é positivo e par")
} else if(numero > 0 && numero % 2 != 0){
    console.log("O número inserido : "+numero+ " é positivo e ímpar")
} else if(numero < 0 && numero % 2 == 0){
    console.log("O número inserido : "+numero+ " é negativo e par")
} else if(numero < 0 && numero % 2 != 0){
    console.log("O número inserido : "+numero+ " é negativo e ímpar")
}