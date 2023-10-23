import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { AnadirAdminComponent } from './anadir-admin/anadir-admin.component';
import { AnadirManComponent } from './anadir-mantenimiento/anadir-mantenimiento.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';
import { ModificarManComponent } from './modificar-mantenimiento/modificar-mantenimiento.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuariosComponent,
    AnadirAdminComponent,
    AnadirManComponent,
    ModificarAdminComponent,
    ModificarManComponent,
    ModificarClienteComponent
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
