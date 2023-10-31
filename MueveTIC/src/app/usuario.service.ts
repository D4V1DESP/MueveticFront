import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Mantenimiento, Administrador } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URLLogin="http://localhost:8080/users/login";
  private baseURLAdmin = "http://localhost:8080/users/administradores";
  private baseURLCliente = "http://localhost:8080/users/cliente";
  private baseURLMantenimiento = "http://localhost:8080/users/mantenimiento";
  private baseUrlActualizarUsuario = "http://localhost:8080/users/UpdateUser";
  private baseUrlAnadirusuario = "http://localhost:8080/users/AddUser"

  constructor(private httpService: HttpClient) {}

  anadirUsuario(valor:any){
    return this.httpService.post(this.baseUrlAnadirusuario, valor);
  }

  obtenerDatosAdministradores(): Observable<Administrador[]> {
    return this.httpService.get<Administrador[]>(this.baseURLAdmin);
  }

  obtenerDatosClientes(): Observable<Cliente[]> {
    return this.httpService.get<Cliente[]>(this.baseURLCliente);
  }
  obtenerDatosMantenimiento(): Observable<Mantenimiento[]> {
    return this.httpService.get<Mantenimiento[]>(this.baseURLMantenimiento);
  }

  obtenerAdminPorEmail(email: string): Observable<Administrador> {
    const url = `${this.baseURLAdmin}/${email}`;
    return this.httpService.get<Administrador>(url);
  }
  obtenerClientePorEmail(email: string): Observable<Cliente> {
    const url = `${this.baseURLCliente}/${email}`;
    return this.httpService.get<Cliente>(url);
  }
  obtenerMantenimientoPorEmail(email: string): Observable<Mantenimiento> {
    const url = `${this.baseURLMantenimiento}/${email}`;
    return this.httpService.get<Mantenimiento>(url);
  }

  modificarDatosAdministrador(admin: Administrador): Observable<Administrador> {
    return this.httpService.post<Administrador>(this.baseUrlActualizarUsuario, admin);
  }
  userLogin(usuario: any){
    return this.httpService.post(this.URLLogin,usuario);
  }
  modificarDatosCliente(cliente : Cliente) : Observable<Cliente>{
    return this.httpService.post<Cliente>(this.baseUrlActualizarUsuario, cliente)
  }

  modificarDatosMantenimiento(mantenimiento : Mantenimiento) : Observable<Mantenimiento>{
    return this.httpService.post<Mantenimiento>(this.baseUrlActualizarUsuario, mantenimiento)
  }
  
}
