import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() {
    this.generarEstrellas();
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
