import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURLAdmin = "http://localhost:8080/users/administradores";
  private baseURLCliente = "http://localhost:8080/users/cliente";
  private baseURLMantenimiento = "http://localhost:8080/users/mantenimiento";

  constructor(private httpService: HttpClient) {}

  obtenerDatosAdministradores(): Observable<Usuario[]> {
    return this.httpService.get<Usuario[]>(this.baseURLAdmin);
  }

  obtenerDatosClientes(): Observable<Usuario[]> {
    return this.httpService.get<Usuario[]>(this.baseURLCliente);
  }
  obtenerDatosMantenimiento(): Observable<Usuario[]> {
    return this.httpService.get<Usuario[]>(this.baseURLMantenimiento);
  }

  obtenerAdminPorEmail(email: string): Observable<Usuario> {
    const url = `${this.baseURLAdmin}/${email}`;
    return this.httpService.get<Usuario>(url);
  }
  obtenerClientePorEmail(email: string): Observable<Usuario> {
    const url = `${this.baseURLCliente}/${email}`;
    return this.httpService.get<Usuario>(url);
  }
  obtenerMantenimientoPorEmail(email: string): Observable<Usuario> {
    const url = `${this.baseURLMantenimiento}/${email}`;
    return this.httpService.get<Usuario>(url);
  }
  
  
}
