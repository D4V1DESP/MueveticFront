import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../vehiculo';

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
  
  ngOnInit() : void{
    this.obtenerReservas();
  }
  loading: boolean = true;

obtenerReservas() {
  this.loading = true;
  this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
    respuesta => {
      /*if (Array.isArray(respuesta)) {
        this.listaReservasCompleta = respuesta;
        this.reservaActiva=this.listaReservasCompleta.find(reserva => reserva.estado === 'reservado');
        if (this.reservaActiva!==undefined){
          this.listaReservas.push(this.reservaActiva);
        }
      } else {
        this.listaReservas = [];*/
      this.reservaActiva=respuesta;
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
      this.listaReservasCompleta=respuesta;
    },
    error=>{
      console.error('Error al obtener reservas:', error);
      this.listaReservas = [];
    },
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
