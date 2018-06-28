import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Noticia } from './noticia';
import { NoticiaService } from './noticia.service';
@Component({
  selector: 'app-root',
  templateUrl: './vernoticia.component.html',
  styleUrls: ['./vernoticia.component.css']
})
export class VerNoticiaComponent implements OnInit {
  constructor(private noticiaService: NoticiaService) {}


  noticia: Noticia = new Noticia();
  tituloduplicado: boolean = false;

  ngOnInit(): void {
    this.noticia = this.noticiaService.getNoticia();
  }
}
