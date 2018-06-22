import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Noticia } from './noticia';
import { NoticiaService } from './noticia.service';
@Component({
  selector: 'app-root',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  constructor(private noticiaService: NoticiaService) {}

  noticias: Noticia[];

  noticia: Noticia = new Noticia();
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
      .catch();
  }
}
