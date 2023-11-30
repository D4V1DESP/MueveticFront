import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  listaReservas: Reserva[] = [];



  constructor(private reservaService: ReservaService) { }
// Método que se llama después de que Angular ha inicializado todas las propiedades del componente
  ngOnInit(): void {
    this.obtenerReservas();
    console.log(this.listaReservas.find(reserva => reserva.estado === 'reservado')?.fecha);

  }
  // Método para obtener la lista de reservas desde el servicio
  obtenerReservas() {
    this.reservaService.obtenerListaReservas().subscribe((data: Reserva[]) => {
      this.listaReservas = data;
    });
  }

}
