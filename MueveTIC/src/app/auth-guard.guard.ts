import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private usuarioService : UsuarioService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const expectedRole = route.data['expectedRole']; // Define the expected role for the route
    const role = this.usuarioService.role;

    if (expectedRole != role) {
      // Redirect unauthorized users to a different route or show an error message
      return this.router.parseUrl('/login'); // Redirect to an unauthorized page
    }

    return true;
  }
}
