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

import { ReservasComponent } from './reservas/reservas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { AnadirPatineteComponent } from './anadir-patinete/anadir-patinete.component';
import { AnadirMotoComponent } from './anadir-moto/anadir-moto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnadirCochesComponent,
    AnadirPatineteComponent,
    AnadirMotoComponent,
    RegistroUsuariosComponent,
    AnadirAdminComponent,
    AnadirManComponent,
    ModificarAdminComponent,
    ModificarManComponent,
    ModificarClienteComponent,
    ReservasComponent,
    VehiculosComponent,
    UsuariosComponent
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
export class RegistroUsuariosModule { }
export class AnadirUsuarioModule { }
