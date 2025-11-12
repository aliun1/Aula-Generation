import { Terrestre } from "./Terrestre"

export function main(){

// Intanciou o objeto da Classe Terrestre
const bike: Terrestre = new Terrestre(2, 2, 20) // capacidade, rodas e velocidade

console.log(" A capacidade do meio de transporte é: " + bike.capacidade) // bike+capacidade de assentos

/*bike.capacidade = 3 esse exemplo atualiza o novo valor, ou seja "A capacidade do meio de transporte é 3"
*/
}

main()