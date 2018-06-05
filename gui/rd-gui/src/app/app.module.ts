import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { LoginComponent } from './components/login.component';
import { NoticiasComponent } from './components/noticias.component';

import { NoticiaService } from './components/noticia.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    NoticiasComponent
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
        path: 'login',
        component: LoginComponent
      }
      
])
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
