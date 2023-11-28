import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { Vehiculo } from '../vehiculo';
@Component({
  selector: 'app-reservas-mantenimiento',
  templateUrl: './reservas-mantenimiento.component.html',
  styleUrls: ['./reservas-mantenimiento.component.css']
})
export class ReservasMantenimientoComponent {
 

  // Variable para controlar el paso del ratón
  isMouseOver = false;
// Variable para controlar la fila seleccionada
  selectedRowIndex = -1;
  miTabla: any[] = [];
  listaCoches: Vehiculo[];
  listaReservas: Reserva[];

 
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
