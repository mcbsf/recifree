import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppHeaderComponent } from './header/app-header.component';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
])
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
