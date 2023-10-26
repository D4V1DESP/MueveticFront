import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, Cliente, Mantenimiento } from './usuario';

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

  obtenerDatosClientes(): Observable<Cliente[]> {
    return this.httpService.get<Cliente[]>(this.baseURLCliente);
  }
  obtenerDatosMantenimiento(): Observable<Mantenimiento[]> {
    return this.httpService.get<Mantenimiento[]>(this.baseURLMantenimiento);
  }

  obtenerAdminPorEmail(email: string): Observable<Usuario> {
    const url = `${this.baseURLAdmin}/${email}`;
    return this.httpService.get<Usuario>(url);
  }
  obtenerClientePorEmail(email: string): Observable<Cliente> {
    const url = `${this.baseURLCliente}/${email}`;
    return this.httpService.get<Cliente>(url);
  }
  obtenerMantenimientoPorEmail(email: string): Observable<Mantenimiento> {
    const url = `${this.baseURLMantenimiento}/${email}`;
    return this.httpService.get<Mantenimiento>(url);
  }

  modificarDatosAdministrador(admin: Usuario): Observable<Usuario> {
    const url = `${this.baseURLAdmin}/${admin.email}`;
    return this.httpService.put<Usuario>(url, admin);
  }
  
  
}
