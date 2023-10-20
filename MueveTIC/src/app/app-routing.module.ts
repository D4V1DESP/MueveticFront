import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
