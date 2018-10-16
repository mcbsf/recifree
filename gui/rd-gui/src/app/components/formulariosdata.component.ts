import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Formulario } from './formulario';
import { FormularioService } from './formulario.service';

@Component({
	selector: 'formulariosdata',
	templateUrl: './formulariosdata.component.html',
	styleUrls: ['./formulariosdata.component.css'],
	providers: [FormularioService]
})

export class FormulariosDataComponent implements OnInit {
	
	constructor(private formularioService: FormularioService) {}
	
	formularios: Formulario[];
	formRemover: Formulario[] = [];

	getElement(id: string): HTMLInputElement {
		return (<HTMLInputElement> document.getElementById(id));
	}

	onChange(formulario: Formulario): void {
		var checkBox = this.newCheckboxValue(formulario.email);
		if (checkBox == 'checked') {
			this.selectf(formulario);
		} else {
			this.deselect(formulario);
		}
	}

	newCheckboxValue(id: string): string {
		var checkBox = this.getElement(id);
		var statusValue = checkBox.value;
		checkBox.value = this.changeValue(statusValue)
		return checkBox.value;
	}

	changeValue(value: string): string {
		if (value == 'unchecked') {
			return 'checked';
		}
		return 'unchecked';
	}

	selectf(formulario: Formulario): void {
		if (!this.formRemover.includes(formulario)) {
			this.formRemover.push(formulario);
		}
	}

	deselect(formulario: Formulario): void {
		this.formRemover = this.formRemover.filter(f => f.email !== formulario.email);
	}

	removerSelecionados(): void {
		this.remover(this.formRemover);
	}

	removerTodos(): void {
		this.remover(this.formularios);
		this.formRemover = [];
		this.formularios = [];
	}

	remover(formArray: Formulario[]): void {
		if (formArray.length > 0) {
			this.hideMessage('msgUnselected');
			for (let f of formArray) {
				this.removerFormulario(f);
			}
			this.showMessage('msgSuccess');
		} else {
			this.showMessage('msgUnselected');
		}
	}

	removerFormulario(formulario: Formulario): void {
		this.formularioService.remover(formulario)
		.then(formularios => this.formularios = formularios)
		.catch(erro => alert(erro));
	}

	exportarSelecionados(): void {
		//to do
	}

	exportarTodos(): void {
		//to do
	}

	hideMessage(id: string): void {
		this.setHidden(id, true);
	}

	showMessage(id: string): void {
		this.setHidden(id, false);
	}

	setHidden(id: string, status: boolean): void {
		this.getElement(id).hidden = status;
	}

	ngOnInit(): void {
		this.formularioService.getFormularios()
		.then(formularios => this.formularios = formularios)
		.catch(erro => alert(erro));
	}

}
