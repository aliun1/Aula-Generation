const input = require('readline-sync')

let A, B, C

A = input.questionInt("Insira o primeiro numero: ")
B = input.questionInt("Insira o segundo numero: ")
C = input.questionInt("Insira o terceiro numero: ")

if((A+B) > C){
    console.log("A soma entre A e B é maior que C")

} else if(A+B < C){
    console.log("A soma entre A e B é menor que C")
} else{
    console.log("A soma entre A e B é igual C")
}

