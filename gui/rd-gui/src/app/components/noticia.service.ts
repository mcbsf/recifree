import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Noticia } from './noticia';

@Injectable()
export class NoticiaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(noticia: Noticia): Promise<Noticia> {
    return this.http.post(this.taURL + "/noticia",JSON.stringify(noticia), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return noticia;} else {return null;}
           })
           .catch(this.tratarErro);
  }

  atualizar(noticia: Noticia): Promise<Noticia> {
    return this.http.put(this.taURL + "/noticia",JSON.stringify(noticia), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return noticia;} else {return null;}
         })
         .catch(this.tratarErro);
  }

  getNoticias(): Promise<Noticia[]> {
    return this.http.get(this.taURL + "/noticias")
             .toPromise()
             .then(res => res.json() as Noticia[])
             .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any>{
    console.error('Acesso mal sucedido ao serviço de noticias',erro);
    return Promise.reject(erro.message || erro);
  }
}