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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { AnadirPatineteComponent } from './anadir-patinete/anadir-patinete.component';
import { AnadirMotoComponent } from './anadir-moto/anadir-moto.component';
import { UsuariosClienteComponent } from './usuarios-cliente/usuarios-cliente.component';
import { PaginaBienvenidaComponent } from './pagina-bienvenida/pagina-bienvenida.component';
import { VehiculosClienteComponent } from './vehiculos-cliente/vehiculos-cliente.component';

import { ReservasClienteComponent } from './reservas-cliente/reservas-cliente.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { ModificarContrasenaComponent } from './modificar-contrasena/modificar-contrasena.component';
import { ModificarConfiguracionSistemaComponent } from './modificar-configuracion-sistema/modificar-configuracion-sistema.component';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { TokenInterceptorService } from './token-interceptor.service';

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
    UsuariosComponent,
    UsuariosClienteComponent,
    PaginaBienvenidaComponent,
    VehiculosClienteComponent,
    ReservasClienteComponent,
    RecuperacionComponent,
    ModificarContrasenaComponent,
    ModificarConfiguracionSistemaComponent,
    ValoracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
