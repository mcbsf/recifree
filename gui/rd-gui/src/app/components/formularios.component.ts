import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Formulario } from './formulario';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  providers: [FormularioService]
})

export class FormulariosComponent implements OnInit {
	
	constructor(private formularioService: FormularioService) {}
	
	formulario: Formulario = new Formulario();
	formularios: Formulario[] = [];
	
	emailCadastrado: boolean = false;
	foiAtualizado: boolean = false;
	foiCadastrado: boolean = false;

	cadastrarFormulario(formulario: Formulario): void {
		this.resetMensagem();
		
		if (this.isTodosCamposPreenchidos(formulario)) {
			this.hideElement("msgCamposVazios",true);
		this.formularioService.cadastrar(formulario)
		.then(novof => {
			if (novof) {
				this.formularios.push(novof);
				this.formulario = new Formulario();
				this.foiCadastrado = true;
			} else {
				this.emailCadastrado = true;
				this.disableButton("buttonEnviar",true);
			}
		})
		.catch(erro => alert(erro));
		
		} else {
			this.hideElement("msgCamposVazios",false);
		}
	}
	
	atualizarCadastro(formulario: Formulario): void {
		this.resetMensagem();
		
		if (this.isTodosCamposPreenchidos(formulario)) {
		this.formularioService.atualizar(formulario);
		this.foiAtualizado = true;
		this.resetEmail();
		this.disableButton("buttonEnviar",false);
		}
		
	}
	
	cancelar(): void {
		this.resetEmail();
	}
	
	resetEmail(): void { this.emailCadastrado = false; }
		
	resetMensagem(): void {
		this.foiAtualizado = false;
		this.foiCadastrado = false;
	}
	
	isEmpty(campo: string): boolean {
		return (campo == "");
	}
	
	isTodosCamposPreenchidos(formulario: Formulario): boolean {
		return (!this.isEmpty(formulario.nome) &&
		    !this.isEmpty(formulario.idade) && 
			!this.isEmpty(formulario.telefone) && 
			!this.isEmpty(formulario.email) && 
			!this.isEmpty(formulario.ocupacao) && 
			!this.isEmpty(formulario.endereco) && 
			!this.isEmpty(formulario.pergunta1) && 
			!this.isEmpty(formulario.pergunta2) && 
			!this.isEmpty(formulario.pergunta3));
	}
	
	hideElement(id: string, state: boolean): void {
		(<HTMLInputElement> document.getElementById(id)).hidden = state;
	}
	
	disableButton(id: string, state: boolean): void {
		(<HTMLInputElement> document.getElementById(id)).disabled = state;
	}
	
	ngOnInit(): void {
		this.formularioService.getFormularios()
		.then(formularios => this.formularios = formularios)
		.catch(erro => alert(erro));
		this.resetMensagem();
	}
	
}
