import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { Vehiculo } from '../vehiculo';
import { OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

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
        console.log('Respuesta del servidor:', respuesta);
        this.listaReservas = Array.isArray(respuesta) ? respuesta : [respuesta as Reserva];
        this.loading = false;
      },
      error => {
        console.error('Error al obtener reservas:', error);
        this.listaReservas = [];
        this.loading = false;
      }
    );
  }
  darseBaja() {
    this.UsuarioService.darseBaja(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {  
        console.log('Respuesta del servidor:', respuesta);
        this.UsuarioService.logout();
      },
      error => {
        console.error('Error al darse de baja:', error);
      }
    );
  }
  
  
  cancelarReserva(reserva: Reserva) {
    this.ReservaService.cancelarReserva(reserva).subscribe(
      respuesta => {
        console.log('Reserva cancelada correctamente:', respuesta);
        window.location.reload();
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
