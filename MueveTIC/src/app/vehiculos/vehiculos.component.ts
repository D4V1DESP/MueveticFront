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
  eliminarVehiculo(vehiculo: Vehiculo) {
    
    console.log('Eliminar vehiculo:', vehiculo);
    this.vehiculoService.eliminarVehiculo(vehiculo).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        if (vehiculo.tipo === "Patinete"){
          this.eliminarElementoDeLista(this.listaPatinetes,vehiculo)
        }else if(vehiculo.tipo === "Coche"){
          this.eliminarElementoDeLista(this.listaCoches,vehiculo)
        }else{
          this.eliminarElementoDeLista(this.listaMotos,vehiculo)
        }
      },
      error =>{
        console.error('Error al enviar datos:', error);
      }
    )
  }
  confirmarEliminarVehiculo(vehiculo: Vehiculo){
    if (window.confirm('¿Estás seguro de que deseas eliminar el vehiculo con matricula '+vehiculo.matricula+'?')) {
      this.eliminarVehiculo(vehiculo)
    }
  }
  
  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }
  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
  eliminarElementoDeLista(lista: Vehiculo[], vehiculoAEliminar: Vehiculo): void {
    const indiceAEliminar = lista.findIndex(vehiculo => vehiculo.matricula === vehiculoAEliminar.matricula);

    if (indiceAEliminar !== -1) {
        lista.splice(indiceAEliminar, 1);
    } 
}
}