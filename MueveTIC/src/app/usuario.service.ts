import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Mantenimiento, Administrador, Usuario } from './usuario';
import { TokenRecuperacion } from './token-recuperacion';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private JWToken = 'JWToken';
  private roleUser = 'roleUser';
  private USER_token = 'loggedUser';
  private URLLogin="http://localhost:8080/users/login";
  private URLAuthenticate = "http://localhost:8080/users/authenticate";
  private baseURLAdmin = "http://localhost:8080/users/administradores";
  private baseURLCliente = "http://localhost:8080/users/cliente";
  private baseURLMantenimiento = "http://localhost:8080/users/mantenimiento";
  private baseUrlActualizarUsuario = "http://localhost:8080/users/UpdateUser";
  private baseUrlAnadirusuario = "http://localhost:8080/users/AddUser";
  private baseUrlModificarContrasena = "http://localhost:8080/users/updatePass"



  get token(){
    return sessionStorage.getItem(this.JWToken)
  }

  get role(){
    return sessionStorage.getItem(this.roleUser)
  }

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

  updatePass(token: TokenRecuperacion){
    const url=`${this.updatePass}/${token.email}`;
    return this.httpService.post<Usuario>(url,token);
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

  authenticate(usuario : any) : Observable<string>{
    return this.httpService.post(this.URLAuthenticate, usuario, {responseType : 'text'})
  }

  modificarDatosCliente(cliente : Cliente) : Observable<Cliente>{
    return this.httpService.post<Cliente>(this.baseUrlActualizarUsuario, cliente)
  }

  modificarDatosMantenimiento(mantenimiento : Mantenimiento) : Observable<Mantenimiento>{
    return this.httpService.post<Mantenimiento>(this.baseUrlActualizarUsuario, mantenimiento)
  }

  saveLoggedUser(user: any): void {
    // Almacenar información del usuario en sessionStorage
    sessionStorage.setItem(this.USER_token, JSON.stringify(user));
  }

  getLoggedUser(): any {
    // Obtener información del usuario desde sessionStorage
    const userString = sessionStorage.getItem(this.USER_token);
    return userString ? JSON.parse(userString) : null;
  }

  clearLoggedUser(): void {
    // Eliminar la información del usuario al cerrar sesión
    sessionStorage.removeItem(this.USER_token);
  }

  saveJWTUser(JWToken : string): void{
    sessionStorage.setItem(this.JWToken, JWToken);
  }

  saveRole(role : string) : void{
    sessionStorage.setItem(this.roleUser, role)
  }
}
