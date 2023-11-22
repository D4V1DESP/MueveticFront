import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { Reserva } from './reserva';
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  

  constructor(private HttpClient : HttpClient) { }

  enviarVehiculo(valor: any) {
    return this.HttpClient.post('http://localhost:8080/vehiculos/alta',  valor );
  }
  obtenerListaVehiculos(cadControlador : string) : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos" + cadControlador)
  }
  eliminarVehiculo(vehiculo:Vehiculo){
    return this.HttpClient.post("http://localhost:8080/vehiculos/eliminar", vehiculo)
  }
  reservarVehiculo(reserva:any){
    return this.HttpClient.post("http://localhost:8080/reservas/usersAdd", reserva)
  }
  // Obtener lista de vehículos disponibles
  obtenerListaCochesDisponibles() : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos/coches/disponibles")
  }
  obtenerListaMotosDisponibles() : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos/motos/disponibles")
  }
  obtenerListaPatinetesDisponibles() : Observable<any>{
    return this.HttpClient.get<any>("http://localhost:8080/vehiculos/patinetes/disponibles")
  }

}
