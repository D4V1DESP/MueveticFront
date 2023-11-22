import { Component } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  listaReservas: Reserva [] =[];



  constructor(private reservaService : ReservaService){}

  ngOnInit() : void {
    this.obtenerReservas();
    console.log(this.listaReservas.find(reserva => reserva.estado === 'reservado')?.fecha);

  }
  obtenerReservas() {
    this.reservaService.obtenerListaReservas().subscribe((data: Reserva[]) => {
      this.listaReservas = data;
    });
  }

}
