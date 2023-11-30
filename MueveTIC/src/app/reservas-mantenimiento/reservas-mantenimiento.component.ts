import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { ReservaMantenimiento } from '../reservaMantenimiento';


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
  listaReservas: ReservaMantenimiento[] = [];
  listaReservasCompleta: Reserva[];
  reservaActiva: Reserva | undefined;


  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService, private router: Router) {
    this.listaReservas = [];
  }

  ngOnInit(): void {
    this.obtenerReservas();
  }
  loading: boolean = true;
//Realiza dos llamadas a API REST de reservas, obteniendo así la reserva activa del usuario y la lista completa de reservas del usuario.
// Las reservas se almacenan en reservaActiva y listaReservas
obtenerReservas() {
  this.loading = true;
  
  this.ReservaService.obtenerListaReservasMantenimientoPorEmail(this.UsuarioService.getLoggedUser().email).subscribe(
    respuesta => {
      
      this.listaReservas=respuesta;
      this.loading = false;
      console.log(this.listaReservas)
    },
    error=>{
      console.error('Error al obtener reservas:', error);
      this.listaReservas = [];
    },
  );
}
//se utiliza para cancelar una reserva. Antes de realizar la llamada a la API REST, se muestra una confirmación al usuario.
  cancelarReserva(reserva: ReservaMantenimiento) {
    if (window.confirm('¿Estás seguro de que deseas cancelar tu reserva?')) {
      this.ReservaService.cancelarReservaMantenimiento(reserva).subscribe(
        respuesta => {
          console.log('Reserva cancelada correctamente:', respuesta);
          window.location.reload();
        },
        error => {
          console.error('Error al cancelar reserva:', reserva, error);
        }
      );
    }
  }
  //se utiliza para finalizar una reserva. Antes de realizar la llamada a la API REST, se muestra una confirmación al usuario.
  finalizarReserva(reserva: ReservaMantenimiento) {

    if (window.confirm('¿Pasar a la ventana de valoración y facturar la reserva?')){
      this.ReservaService.finalizarReservaMantenimiento(reserva).subscribe(
        respuesta => {
          console.log('Reserva finalizada correctamente:', respuesta);
          window.location.reload();
        },
        error => {
          console.error('Error al cancelar reserva:',reserva, error);
        }
      );
    }

  }

  //metodo que comprueba que la tabla esté vacía
  esTablaVacia(): boolean {
    return this.miTabla.length === 0;
  }
//establece la fila seleccionada.
  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }
//devuelve true si la fila especificada está seleccionada.
  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
}
