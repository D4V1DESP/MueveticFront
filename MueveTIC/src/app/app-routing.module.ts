import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { AnadirAdminComponent } from './anadir-admin/anadir-admin.component';
import { AnadirMantenimientoComponent } from './anadir-mantenimiento/anadir-mantenimiento.component';




const routes: Routes = [
  { path: '', redirectTo: '/registro-usuarios', pathMatch: 'full'},
  { path: 'registro-usuarios', component: RegistroUsuariosComponent },
  { path: '', redirectTo: '/anadir-admin', pathMatch: 'full'},
  { path: 'anadir-admin', component: AnadirAdminComponent }
  { path: '', redirectTo: '/anadir-mantenimiento', pathMatch: 'full'},
  { path: 'anadir-mantenimiento', component: AnadirMantenimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
