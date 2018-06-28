import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { CriarNoticiaComponent } from './components/criarnoticia.component';
import { NoticiasComponent } from './components/noticias.component';
import { VerNoticiaComponent } from './components/vernoticia.component';


import { NoticiaService } from './components/noticia.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CriarNoticiaComponent,
    NoticiasComponent,
    VerNoticiaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'noticias',
        component: NoticiasComponent
      },
      {
        path: 'criarnoticia',
        component: CriarNoticiaComponent
      },
      {
        path: 'vernoticia',
        component: VerNoticiaComponent
      },

      
])
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }