import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { AnadirAdminComponent } from './anadir-admin/anadir-admin.component';
import { AnadirMantenimientoComponent } from './anadir-mantenimiento/anadir-mantenimiento.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuariosComponent,
    AnadirAdminComponent,
    AnadirMantenimientoComponent,
    ModificarAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class RegistroUsuariosModule { }
export class AnadirUsuarioModule { }
