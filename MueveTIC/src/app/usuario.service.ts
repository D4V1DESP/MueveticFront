import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = "http://localhost:4200/usuarios";

  constructor(private httpService: HttpClient) { }

  obtenerInformacionUsuarios(): Observable<Usuario[]> {
    return this.httpService.get<Usuario[]>(`${this.baseURL}`);
 }

 
}