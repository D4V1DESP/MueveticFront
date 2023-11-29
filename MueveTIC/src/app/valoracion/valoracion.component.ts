import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  reserva: Reserva={
    cliente: '',
    vehiculo: '',
    estrellas: 0,
    comentario: '',
    estado: '',
    fecha: ''
  };
  constructor(private ReservaService: ReservaService,private UsuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit(){
    this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {
        this.reserva=respuesta;
      },
      error => {
        console.error('Error al obtener reservas:', error);
      });
  }
  generarEstrellas() {
    for (let i = 0; i < this.maxEstrellas; i++) {
      this.estrellas.push(i < this.valoracion);
    }
  }

  establecerValoracion(index: number) {
    this.valoracion = index + 1;
    this.generarEstrellas();
    this.valoracionChange.emit(this.valoracion);
  }
  enviarValoracion(){
    this.ReservaService.finalizarReserva(this.reserva).subscribe(
      respuesta => {
        if(respuesta){
          console.log("mira la base de datos a ver si se ha cambiado bien")
          this.router.navigate(["/usuarios-cliente"])
        }
      },
      error => {
        console.error('Error al obtener reservas:', error);
      });
    
  }
}
