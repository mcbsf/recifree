import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Noticia } from './noticia';
import { NoticiaService } from './noticia.service';
@Component({
  selector: 'noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  constructor(private alunoService: NoticiaService) {}

  noticias: Noticia[],

  ngOnInit(): void {
  	this.alunoService.getNoticias()
  		.then(noticias => this.noticias = noticias)
  		.catch(erro => alert(erro));
  }
}
