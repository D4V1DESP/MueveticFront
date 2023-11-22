import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Vehiculo } from '../vehiculo';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.css']
})
export class ReservasClienteComponent {
// Variable para controlar el paso del ratón
  isMouseOver = false;
// Variable para controlar la fila seleccionada
  selectedRowIndex = -1;
  miTabla: any[] = [];
  listaCoches: Vehiculo[];
  listaReservas: Reserva[];


  ngOnInit() : void{
    this.obtenerReservas();
  }
  obtenerReservas(){
  }
  esTablaVacia(): boolean {
    return this.miTabla.length === 0;
  }
  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }
  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
}

