import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculos';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-cliente',
  templateUrl: './usuarios-cliente.component.html',
  styleUrls: ['./usuarios-cliente.component.css']
})
export class UsuariosClienteComponent implements OnInit {
    listaCoches : Vehiculo []
    listaMotos : Vehiculo []
    listaPatinetes : Vehiculo []
    isMouseOver: boolean = false; // Variable para controlar el paso del ratón
    selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada
  
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
    
    toggleRow(index: number) {
      this.selectedRowIndex = index;
    }
    isRowSelected(index: number) {
      return index === this.selectedRowIndex;
    }
    

}
