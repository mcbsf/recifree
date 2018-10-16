export class Formulario {
  nome: string;
  idade: string;
  telefone: string;
  email: string;
  ocupacao: string;
  endereco: string;
  pergunta1: string;
  pergunta2: string;
  pergunta3: string;

  constructor() {
    this.nome = "";
    this.idade = "";
	this.telefone = "";
	this.email = "";
	this.ocupacao = "";
	this.endereco = "";
	this.pergunta1 = "";
	this.pergunta2 = "";
	this.pergunta3 = "";
  }

  clone(): Formulario {
    var copia: Formulario = new Formulario();
	copia.copy(this);
    return copia;
  }
  
  copy(from: Formulario): void {
	  this.nome = from.nome;
	  this.idade = from.idade;
	  this.telefone = from.telefone;
	  this.email = from.email;
	  this.ocupacao = from.ocupacao;
	  this.endereco = from.endereco;
	  this.pergunta1 = from.pergunta1;
	  this.pergunta2 = from.pergunta2;
	  this.pergunta3 = from.pergunta3;
  }
}