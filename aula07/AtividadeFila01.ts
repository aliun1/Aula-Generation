import { Queue } from "./Queue";

const fila = new Queue<string>()
import * as readlineSync from 'readline-sync'; 
let opcao: number;

do { 
console.log("\n**************************************\n")    
console.log("1 - Adicionar Cliente na fila")
console.log("2 - Listar todos os Clientes")
console.log("3 - Retirar Cliente da fila")
console.log("0 - Sair")
console.log("\n**************************************\n")    

opcao = Number(readlineSync.question("Digite uma opcao: "));

switch (opcao) {
    case 1: 
        const nome = readlineSync.question("Digite seu nome: ") //Digitar o nome do usuário
        fila.enqueue(nome)   // alocar 
        fila.printQueue() //armazenar e printar na tela
        console.log("Cliente adicionado") // Cliente vizualiza que houve notificação
        break;

    case 2: 
        console.log("Lista de Clientes") // Cliente vizualiza que houve notificação
        fila.printQueue() //armazenar e printar na tela
        break;

    case 3: 
        const retirar = fila.dequeue() // Variavel aplicada somente nesse case e por esse motivo n declara no global
        if (retirar) {
            fila.printQueue() // mostrar a linha atualizada
        }
        console.log("Cliente foi chamado") // Cliente vizualiza que houve notificação
        break;

    case 0:
    console.log("Programa Finalizado!:D ")
    break;
    default:
    console.log("Opção Inválida :(")
        break;        
}} while(opcao !== 0) //ele executa enquanto o zero não for inserido no terminal
  


