import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {
  @Input() valoracion: number;
  @Output() valoracionChange: EventEmitter<number> = new EventEmitter<number>();

  maxEstrellas = 5;
  reserva: Reserva;
  estrellas: boolean[] = [];

  constructor(private ReservaService: ReservaService, private UsuarioService: UsuarioService) {
    this.generarEstrellas();
  }
  ngOnInit(): void {
    this.ReservaService.ObtenerReservaActiva(this.UsuarioService.getLoggedUser().email).subscribe(
      reserva => {this.reserva = reserva;}, 
      error=>{
        console.log('Error al obtener la reserva activa', error);
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
}
