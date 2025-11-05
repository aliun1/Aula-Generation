// Importa o módulo readline-sync
const leia = require('readline-sync')

let SalarioBruto = 2000.00
let AdicionalNoturno = 500.00
let HorasExtras = 100.00
let Descontos = 200.00

let SalarioLiquido = (SalarioBruto + AdicionalNoturno) + (HorasExtras * 5) - (Descontos)
console.log("O Salário Liquido é de: " + SalarioLiquido.toFixed(1))