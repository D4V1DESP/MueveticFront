import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Coche, Moto, Patinete, Vehiculo } from '../vehiculo';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})

export class VehiculosComponent implements OnInit {
  listaCoches: Coche[] = [];
  listaMotos: Moto[] = [];
  listaPatinetes: Patinete[] = [];
  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }
//es un método auxiliar que llama a los métodos obtenerCoches(), obtenerMotos() y obtenerPatinetes().
  obtenerVehiculos() {

    this.obtenerCoches();
    this.obtenerMotos();
    this.obtenerPatinetes();
  }
//llama al método obtenerListaVehiculos() del servicio VehiculoService para cargar la lista de coches.
  obtenerCoches() {
    this.vehiculoService.obtenerListaVehiculos('/coches').subscribe((data: Coche[]) => {
      this.listaCoches = data;
    });
  }
// llama al método obtenerListaVehiculos() del servicio VehiculoService para cargar la lista de motos.
  obtenerMotos() {
    this.vehiculoService.obtenerListaVehiculos('/motos').subscribe((data: Moto[]) => {
      this.listaMotos = data;
    });
  }
// llama al método obtenerListaVehiculos() del servicio VehiculoService para cargar la lista de patinetes.
  obtenerPatinetes() {
    this.vehiculoService.obtenerListaVehiculos('/patinetes').subscribe((data: Patinete[]) => {
      this.listaPatinetes = data;
    });
  }
  //se utiliza para eliminar un vehículo de la base de datos. 
  //El método recibe el objeto Vehiculo que se desea eliminar como argumento.
  eliminarVehiculo(vehiculo: Vehiculo) {

    console.log('Eliminar vehiculo:', vehiculo);
    this.vehiculoService.eliminarVehiculo(vehiculo).subscribe(
      (response: any) => {
        console.log('Datos enviados con éxito:', response);
        if (vehiculo.tipo === "Patinete") {
          this.eliminarElementoDeLista(this.listaPatinetes, vehiculo)
        } else if (vehiculo.tipo === "Coche") {
          this.eliminarElementoDeLista(this.listaCoches, vehiculo)
        } else {
          this.eliminarElementoDeLista(this.listaMotos, vehiculo)
        }
      },
      (error: any) => {
        console.error('Error al enviar datos:', error);
      }
    )
  }
  //muestra un mensaje de confirmación al usuario antes de eliminar un vehículo. 
  //El método recibe el objeto Vehiculo que se desea eliminar como argumento.
  confirmarEliminarVehiculo(vehiculo: Vehiculo) {
    if (window.confirm('¿Estás seguro de que deseas eliminar el vehiculo con matricula ' + vehiculo.matricula + '?')) {
      this.eliminarVehiculo(vehiculo)
    }
  }

  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }
  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
  //se utiliza para eliminar un elemento de una lista. 
  //El método recibe la lista y el elemento que se desea eliminar como argumentos.
  eliminarElementoDeLista(lista: Vehiculo[], vehiculoAEliminar: Vehiculo): void {
    const indiceAEliminar = lista.findIndex(vehiculo => vehiculo.matricula === vehiculoAEliminar.matricula);

    if (indiceAEliminar !== -1) {
      lista.splice(indiceAEliminar, 1);
    }
  }

}