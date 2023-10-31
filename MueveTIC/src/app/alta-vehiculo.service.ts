import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AltaVehiculoService {
 

  constructor(private client : HttpClient) { }

  enviarVehiculo(valor: any) {
    return this.client.post('http://localhost:8080/vehiculos/alta',  valor );
  }
  

}
