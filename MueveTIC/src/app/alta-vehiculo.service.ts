import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculos';
import { NgModule } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AltaVehiculoService {
 

  constructor(private client : HttpClient) { }

  enviarVehiculo(valor: any) {
    return this.client.post<any>('http://localhost:8081/vehiculo/alta', { valor });
  }
  

}
