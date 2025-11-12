import { Conta } from "./Contas"

export function main(){ // cria a função main

    //INSTANCIA DA CLASSE CONTA
    //INSTANCIAMENTO DE UM OBJETO
    const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 10000000) // conta, agencia, tipo1 corrent e tipo2 poup, titular e valor na conta // a priori é do tipo Conta

console.log("Títular da Conta: " + conta1.titular)

conta1.saldo = 15000000

console.log("Saldo da Conta: " + conta1.saldo)

}

main() // chama a função