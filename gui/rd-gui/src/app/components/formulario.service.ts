import { Injectable }    from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Formulario } from './formulario';

@Injectable()
export class FormularioService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private rdURL = 'http://localhost:3000';
	
	constructor(private http: Http) { }
	
	cadastrar(formulario: Formulario): Promise<Formulario> {
    return this.http.post(this.rdURL + "/formulario",JSON.stringify(formulario), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {
				//this.confirm('Formulário cadastrado com sucesso!');
				return formulario;
			} else {return null;}
		 })
		 .catch(this.tratarErro);
	}
	
	atualizar(formulario: Formulario): Promise<Formulario> {
    return this.http.put(this.rdURL + "/formulario",JSON.stringify(formulario), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {
				//this.confirm('Formulário atualizado com sucesso!');
				return formulario;
			} else {return null;}
         })
         .catch(this.tratarErro);
	}

	remover(formulario: Formulario): Promise<Formulario[]> {
		return this.http.delete(this.rdURL + "/formulariosdata", new RequestOptions({
			headers: this.headers,
			body: formulario
		}))
		.toPromise()
		.then(res => res.json() as Formulario[])
		.catch(this.tratarErro);
	}
	
	getFormularios(): Promise<Formulario[]> {
    return this.http.get(this.rdURL + "/formulariosdata") //salva na outra pagina
             .toPromise()
             .then(res => res.json() as Formulario[])
             .catch(this.tratarErro);
	}
	
	private tratarErro(erro: any): Promise<any>{
		console.error('Erro ao acessar o serviço de formulários', erro);
		return Promise.reject(erro.message || erro);
	}
	
	
 	confirm(mensagem : string) {
        return new Promise(resolve => {
            return resolve(window.confirm(mensagem));
        });
    } 
}