import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor( private HttpClient : HttpClient) {}
  
  obtenerListaVehiculos(cadControlador : string) : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos" + cadControlador)
  }
  eliminarVehiculo(vehiculo:Vehiculo){
    return this.HttpClient.post("http://localhost:8080/vehiculos/eliminar", vehiculo)
  }
}