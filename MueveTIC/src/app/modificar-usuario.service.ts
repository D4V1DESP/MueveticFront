import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificarUsuarioService {

  constructor(private client: HttpClient) {}
    modificarUsuario(valor:any){
      return this.client.post('http://localhost:8080/users/UpdateUser',valor);
    }
}
