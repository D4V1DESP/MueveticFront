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
  

  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService) {
    this.listaReservas = [];
  }
  
  ngOnInit() : void{
    this.obtenerReservas();
  }
  loading: boolean = true;

obtenerReservas() {
  this.loading = true;
  this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
    respuesta => {
      if (Array.isArray(respuesta)) {
        this.listaReservas = respuesta;
      } else {
        this.listaReservas = [];
      }
      this.loading = false;
    },
    error => {
      console.error('Error al obtener reservas:', error);
      this.listaReservas = [];
      this.loading = false;
    }
  );
}
  cancelarReserva(reserva: Reserva) {
    this.ReservaService.cancelarReserva(reserva).subscribe(
      respuesta => {
        console.log('Reserva cancelada correctamente:', respuesta);
      },
      error => {
        console.error('Error al cancelar reserva:',reserva, error);
      }
    );

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
