export class Transporte {
    // Atributo
    private_capacidade: number

    // Método Construtor ele inicializa a classe para transformar o método em Objeto
    constructor(capacidade: number){
        this._capacidade = capacidade // this referência a classe em si para poder acessar os atributos

    // Métodos de Acessos - GET (retorna) e SET (atuaiza)
    public get capacidade() {
        return this._capacidade
    }
    public set capacidade(NovaCapacidade: number) {
        this._capacidade = novaCapacidade
    }
      //Métodos de Suporte / Auxiliares 
    public visualizar(): void { //void não tem retorno
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
        
        console.log("Número de rodas: " + this.numeroRodas)
        console.log("Velocidade: " + this.velocidade.tofixed(2))
	}

    }
}