import { Atleta } from "./Atleta";

export class Nadador extends Atleta {


constructor (nome: string) {
    super(nome)
}
public aquecer(): void {
   console.log("Fazendo alongamento..")

}

public pedalar(): void {
    console.log("Estou pedalando...")
}
}