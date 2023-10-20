import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpService: HttpClient) { }

  obtenerInformacionUsuarios(): Observable<any> {
    return this.httpService.get("http://localhost:4200/usuarios")
 }

 
}