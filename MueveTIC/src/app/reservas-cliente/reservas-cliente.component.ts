import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Vehiculo } from '../vehiculo';
import { OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.css']
})
export class ReservasClienteComponent {

  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada
  miTabla: any[] = [];
  listaCoches: Vehiculo[];
  listaReservas: Reserva[] = [];

  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService) { }
  ngOnInit() : void{
    this.obtenerReservas();
  }
  obtenerReservas(){
    this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(respuesta => {
      this.listaReservas = [respuesta]; // Wrap respuesta in an array
    });
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
