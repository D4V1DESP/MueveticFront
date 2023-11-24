import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ReservasComponent } from './reservas/reservas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';
import { ModificarManComponent } from './modificar-mantenimiento/modificar-mantenimiento.component';
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { AnadirAdminComponent } from './anadir-admin/anadir-admin.component';
import { AnadirManComponent } from './anadir-mantenimiento/anadir-mantenimiento.component';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { AnadirPatineteComponent } from './anadir-patinete/anadir-patinete.component';
import { AnadirMotoComponent } from './anadir-moto/anadir-moto.component';
import { UsuariosClienteComponent } from './usuarios-cliente/usuarios-cliente.component';
import { ReservasClienteComponent } from './reservas-cliente/reservas-cliente.component';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { PaginaBienvenidaComponent } from './pagina-bienvenida/pagina-bienvenida.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { AuthGuard } from './auth-guard.guard';
import { VehiculosClienteComponent } from './vehiculos-cliente/vehiculos-cliente.component';
import { ModificarContrasenaComponent } from './modificar-contrasena/modificar-contrasena.component';
import { ModificarConfiguracionSistemaComponent } from './modificar-configuracion-sistema/modificar-configuracion-sistema.component';




const routes: Routes = [
  { path: '', redirectTo: '/pagina-bienvenida', pathMatch: 'full' },
  // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuarios', component: RegistroUsuariosComponent },
  
  { path: 'reservas', component: ReservasComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'vehiculos', component: VehiculosComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },

  { path: 'anadir-admin', component: AnadirAdminComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'anadir-mantenimiento', component: AnadirManComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'anadir-coche', component: AnadirCochesComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'anadir-patinete', component: AnadirPatineteComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path: 'anadir-moto', component: AnadirMotoComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },

  { path : 'modificar-admin/:email', component: ModificarAdminComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' }},
  { path : 'modificar-mantenimiento/:email', component: ModificarManComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },
  { path : 'modificar-cliente/:email', component: ModificarClienteComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_ADMIN' } },
  { path : 'usuarios-cliente', component: UsuariosClienteComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_CLIENTE' }},
  { path : 'pagina-bienvenida', component: PaginaBienvenidaComponent},
  { path : 'reservas-cliente', component: ReservasClienteComponent , canActivate: [AuthGuard], data: { expectedRole: 'ROLE_CLIENTE' }},
  { path : 'recuperacion', component: RecuperacionComponent},
  { path : 'modificar-contrasena/:emailenc', component: ModificarContrasenaComponent},


  { path : 'valoracion', component: ValoracionComponent},
  { path : 'modificar-configuracion-sistema', component: ModificarConfiguracionSistemaComponent}
  // Ruta para el componente de registro
  // Otras rutas para tus componentes adicionales

];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {


}

