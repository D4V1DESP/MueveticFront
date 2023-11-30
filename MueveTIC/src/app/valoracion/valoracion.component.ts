import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {

  @Input() valoracion: number;
  @Output() valoracionChange: EventEmitter<number> = new EventEmitter<number>();

  maxEstrellas = 5;

  estrellas: boolean[] = [];
  reserva: Reserva = {
    cliente: '',
    vehiculo: '',
    estrellas: 0,
    comentario: '',
    estado: '',
    fecha: ''
  };
  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {
        this.reserva = respuesta;
      },
      error => {
        console.error('Error al obtener reservas:', error);
      });
  }
  //se utiliza para generar un arreglo de booleanos que indica si cada estrella está seleccionada. 
  //El arreglo tiene una longitud igual al número máximo de estrellas.
  generarEstrellas() {
    for (let i = 0; i < this.maxEstrellas; i++) {
      this.estrellas.push(i < this.valoracion);
    }
  }
//establece la valoración del componente. El método recibe el índice de la estrella seleccionada como argumento.
  establecerValoracion(index: number) {
    this.valoracion = index + 1;
    this.generarEstrellas();
    this.valoracionChange.emit(this.valoracion);
  }
  //se utiliza para enviar la valoración a la base de datos. El método llama al método finalizarReserva() 
  //del servicio ReservaService para actualizar la reserva con la nueva valoración. 
  //Si la operación es exitosa, el usuario se redirige a la página usuarios-cliente.
  enviarValoracion() {
    this.ReservaService.finalizarReserva(this.reserva).subscribe(
      respuesta => {
        if (respuesta) {
          console.log("mira la base de datos a ver si se ha cambiado bien")
          this.router.navigate(["/usuarios-cliente"])
        }
      },
      error => {
        console.error('Error al obtener reservas:', error);
      });

  }
}
