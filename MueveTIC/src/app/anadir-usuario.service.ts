import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnadirUsuarioService {

  constructor(private client: HttpClient) { }
  anadirUsuario(valor:any){
    return this.client.post('http://localhost:8080/users/AddUser',valor);
  }
  
}
