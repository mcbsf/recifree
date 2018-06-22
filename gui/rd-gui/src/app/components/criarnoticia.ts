import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Noticia } from './noticia';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './criarnoticias.component.html',
  styleUrls: ['./criarnoticias.component.css']
})
export class CriarNoticiaComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) {}


   noticia: Noticia = new Noticia();
   noticias: Noticia[];
   tituloduplicado: boolean = false;

   criarnoticia(a: Noticia): void {
     this.noticiaService.criar(a)
        .then(ab => {
           if (ab) {
              this.noticias.push(ab);
              this.noticia = new Noticia();
           } else {
             this.tituloduplicado = true
           }
        })
        .catch(erro => alert(erro));
   }


   ngOnInit(): void {
     this.noticiaService.getNoticias()
         .then(noticias => this.noticias = noticias)
         .catch(erro => alert(erro));
   }

   

}

