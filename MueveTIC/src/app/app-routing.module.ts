import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { LoginComponent } from './login/login.component';
import { AnadirPatineteComponent } from './anadir-patinete/anadir-patinete.component';
import { AnadirMotoComponent } from './anadir-moto/anadir-moto.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'anadir-coche', component: AnadirCochesComponent },
  { path: 'anadir-patinete', component: AnadirPatineteComponent },
  { path: 'anadir-moto', component: AnadirMotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

