export class Conta {
    // ATRIBUTOS DA CLASSE
    private _numero: number  // private indica que o atributo só é acessível dentro da Classe
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // MÉTODO CONSTRUTOR 
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){ // ele atribui como o let 
    this._numero = numero // this "esse" _numero => acessando a classe conta
    this._agencia = agencia
    this._tipo = tipo
    this._titular = titular
    this._saldo = saldo
    

}

    //MÉTODO DE ACESSO  - GET e o SET => GETTERS E SETTERS ( controle de borracha )
    public set numero(novoValor: number) { // SET => atualizar de forma segura, os atributos
        this._numero = novoValor
    }
    
    public get numero(){ // GET => recupera ou mostra de forma segura o valor do atributo em especifico, nesse caso o (this._numero)
        return this._numero
    }
    
    
    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

}


//(uma maneira de alteração/acesso das informações para o cliente alterar)
// public que o cliente tem acesso
// protect dentro de classes especificas e quem poderá acessar e quem delimitar
// Atributos são conteudos sensiveis, como a placa do controle remoto, lembrar do exemplo dos botoes 