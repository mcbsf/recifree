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

import { FormulariosComponent } from './components/formularios.component';
import { FormulariosDataComponent } from './components/formulariosdata.component';


import { NoticiaService } from './components/noticia.service';
import { FormularioService } from './components/formulario.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    CriarNoticiaComponent,
    NoticiasComponent,
    VerNoticiaComponent,
	  FormulariosComponent,
	  FormulariosDataComponent

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
      {
        path: 'formularios',
        component: FormulariosComponent
        },
        {
        path: 'formulariosdata',
        component: FormulariosDataComponent
        },

      
])
  ],
  providers: [NoticiaService, FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }