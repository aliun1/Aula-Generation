import { Stack } from "./Stack";

const pilha = new Stack<string>();
import * as readlineSync from 'readline-sync'; 
let opcao: number;

do { 
console.log("\n**************************************\n")    
console.log("1 - Adicionar livro na Pilha")
console.log("2 - Listar todos os Livros")
console.log("3 - Retirar Livro da pilha")
console.log("0 - Sair")
console.log("\n**************************************\n")    

opcao = Number(readlineSync.question("Digite uma opcao: "));

switch (opcao) {
    case 1: 
        const nomeLivro = readlineSync.question("\nDigite o nome de um Livro: \n") //Digitar o nome do livro
        pilha.push(nomeLivro) // adiciona
        pilha.printStack() //armazenar e printar na tela
        console.log("\nLivro Adicionado\n") // Livro foi adicionado
        pilha.printStack() //armazenar e printar na tela

        break;

    case 2: 
        console.log("\nLista de Livros\n") 
        pilha.printStack() //armazenar e printar na tela
        break;

    case 3: 
        const retirar = pilha.pop() //Retira 
        if (retirar) {
        pilha.printStack() // mostrar a linha atualizada
        console.log("\nRetirar o Livro da Pilha\n") 
        }
        break;

    case 0:
    console.log("Programa Finalizado! :)")
    break;
    default:
    console.log("Opção Inválida :(")
        break;        
}} while(opcao !== 0) //ele executa enquanto o zero não for inserido no terminal
  


