import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { AnadirPatineteComponent } from './anadir-patinete/anadir-patinete.component';
import { HttpClientModule } from '@angular/common/http';
import { AnadirMotoComponent } from './anadir-moto/anadir-moto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnadirCochesComponent,
    AnadirPatineteComponent,
    AnadirMotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
