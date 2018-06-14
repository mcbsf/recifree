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

  ngOnInit(): void {
    this.noticiaService.getNoticias()
      .then(noticias => this.noticias = noticias)
      .catch();
  }
}
