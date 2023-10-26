import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor( private HttpClient : HttpClient) {}
  
  obtenerListaVehiculos(cadControlador : string) : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos" + cadControlador)
  }
}
