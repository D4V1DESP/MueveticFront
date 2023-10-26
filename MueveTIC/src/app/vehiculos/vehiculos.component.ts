import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculos';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  
  listaCoches : Vehiculo []
  listaMotos : Vehiculo []
  listaPatinetes : Vehiculo []

  constructor (private vehiculoService : VehiculoService){}

    ngOnInit() : void{
      this.obtenerVehiculos();
    }

  obtenerVehiculos(){
    
    this.obtenerCoches();
    this.obtenerMotos();
    this.obtenerPatinetes();
  }

  obtenerCoches(){
    this.vehiculoService.obtenerListaVehiculos('/coches').subscribe(respuesta => {
      this.listaCoches = respuesta;
    });
  }

  obtenerMotos(){
    this.vehiculoService.obtenerListaVehiculos('/motos').subscribe(respuesta => {
      this.listaMotos = respuesta;
    });
  }

  obtenerPatinetes(){
    this.vehiculoService.obtenerListaVehiculos('/patinetes').subscribe(respuesta => {
      this.listaPatinetes = respuesta;
    });
  }
}