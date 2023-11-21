import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.css']
})
export class ReservasClienteComponent {

  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada
  miTabla: any[] = [];
  listaReservas: Reserva[] = [];
  listaReservasCompleta: Reserva[];
  reservaActiva: Reserva | undefined;
  

  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService, private router: Router) {
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
        this.listaReservasCompleta = respuesta;
        this.reservaActiva=this.listaReservasCompleta.find(reserva => reserva.estado === 'reservado');
        if (this.reservaActiva!==undefined){
          this.listaReservas.push(this.reservaActiva);
        }

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
    if (window.confirm('¿Estás seguro de que deseas cancelar tu reserva?')) {
      this.ReservaService.cancelarReserva(reserva).subscribe(
        respuesta => {
          console.log('Reserva cancelada correctamente:', respuesta);
        },
        error => {
          console.error('Error al cancelar reserva:',reserva, error);
        }
      );
    }
  }
  finalizarReserva(reserva: Reserva) {

    //TODO metodo de finalizar reserva
    if (window.confirm('¿Pasar a la ventana de valoración y facturar la reserva?')){
      this.router.navigate(['/rutavaloracion']);
    }

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
