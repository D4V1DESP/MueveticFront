import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { ReservasComponent } from './reservas/reservas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';
import { AnadirAdminComponent } from './anadir-admin/anadir-admin.component';
import { AnadirMantenimientoComponent } from './anadir-mantenimiento/anadir-mantenimiento.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent }, // Ruta para el componente de login
  { path: 'registro-usuarios', component: RegistroUsuariosComponent },
  
  { path: 'reservas', component: ReservasComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'usuarios', component: UsuariosComponent },

  { path: 'anadir-admin', component: AnadirAdminComponent},
  { path: 'anadir-mantenimiento', component: AnadirMantenimientoComponent},

  { path: 'modificar-admin/:email', component: ModificarAdminComponent },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' }, // Ruta para el componente de registro
  // Otras rutas para tus componentes adicionales
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
