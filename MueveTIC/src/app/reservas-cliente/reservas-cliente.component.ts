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
  // Variable para controlar el paso del ratón
  isMouseOver = false;
  // Variable para controlar la fila seleccionada
  selectedRowIndex = -1;
  miTabla: any[] = [];
  listaReservas: Reserva[] = [];
  listaReservasCompleta: Reserva[];
  reservaActiva: Reserva | undefined;


  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService, private router: Router) {
    this.listaReservas = [];
  }

  ngOnInit(): void {
    this.obtenerReservas();

  }
  loading: boolean = true;
// Este metodo se utiliza para que el usuario se dé de baja de la aplicación. Antes de realizar la llamada a la API REST, 
//se comprueba que el usuario no tiene reservas activas. 
//Si tiene reservas activas, se muestra un mensaje de error
darseBaja() {

    this.UsuarioService.darseBaja(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {

        console.log('Respuesta del servidor:', respuesta);
        this.router.navigate(['/login']);
      },
      error => {
        window.alert('Error al darse de baja: Tienes reservas activas');
        console.error('Error al darse de baja:', error);

      }
    );
  }
//Realiza dos llamadas a API REST de reservas, obteniendo así la reserva activa del usuario y la lista completa de reservas del usuario.
// Las reservas se almacenan en reservaActiva y listaReservas
  obtenerReservas() {
    this.loading = true;
    this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {
        this.reservaActiva = respuesta;
        this.listaReservas.push(this.reservaActiva);
        this.loading = false;
      },
      error => {
        console.error('Error al obtener reservas:', error);
        this.loading = false;
      },
    );
    this.ReservaService.obtenerListaReservasPoEmail(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {
        this.listaReservasCompleta = respuesta;
      },
      error => {
        console.error('Error al obtener reservas:', error);
        this.listaReservas = [];
      },
    );
  }
  //se utiliza para cancelar una reserva. Antes de realizar la llamada a la API REST, se muestra una confirmación al usuario.
  cancelarReserva(reserva: Reserva) {
    if (window.confirm('¿Estás seguro de que deseas cancelar tu reserva?')) {
      this.ReservaService.cancelarReserva(reserva).subscribe(
        respuesta => {
          console.log('Reserva cancelada correctamente:', respuesta);
          location.reload();
        },
        error => {
          console.error('Error al cancelar reserva:', reserva, error);
        }
      );
    }
  }
//se utiliza para finalizar una reserva. Antes de realizar la llamada a la API REST, se muestra una confirmación al usuario.
  finalizarReserva(reserva: Reserva) {


    if (window.confirm('¿Pasar a la ventana de valoración y facturar la reserva?')) {
      this.router.navigate(['/valoracion']);
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
