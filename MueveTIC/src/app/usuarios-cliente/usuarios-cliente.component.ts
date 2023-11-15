import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo, Coche, Moto, Patinete } from '../vehiculo';
import { OnInit} from '@angular/core';
import { Router } from '@angular/router';

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
  
    constructor (private vehiculoService : VehiculoService, private router: Router){}
  
      ngOnInit() : void{
        this.obtenerVehiculosDisponibles();
      }
  
    obtenerVehiculosDisponibles(){
      this.vehiculoService.obtenerListaCochesDisponibles().subscribe(respuesta => {
        this.listaCoches = respuesta;
      });
      this.vehiculoService.obtenerListaMotosDisponibles().subscribe(respuesta => {
        this.listaMotos = respuesta;
      });
      this.vehiculoService.obtenerListaPatinetesDisponibles().subscribe(respuesta => {
        this.listaPatinetes = respuesta;
      });
    }

    reservarVehiculo(vehiculo: any){
     this.vehiculoService.reservarVehiculo(vehiculo).subscribe(respuesta => {
        console.log(vehiculo);
        this.router.navigate(['/reservas-cliente']);
      });
    }
    toggleRow(index: number) {
      this.selectedRowIndex = index;
    }
    isRowSelected(index: number) {
      return index === this.selectedRowIndex;
    }
}
