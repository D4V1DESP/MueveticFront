import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'anadir-coches', component: AnadirCochesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

