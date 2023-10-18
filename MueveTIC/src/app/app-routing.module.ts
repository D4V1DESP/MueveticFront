import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';




const routes: Routes = [
  { path: '', redirectTo: '/registro-usuarios', pathMatch: 'full'},
  { path: 'registro-usuarios', component: RegistroUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
