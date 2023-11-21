import { Injectable } from '@angular/core';
import { Reserva } from './reserva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  constructor(private httpClient: HttpClient) { }

  ObtenerReservaActiva(email: string) {
    return this.httpClient.get<Reserva>(`http://localhost:8080/reservas/reservaActiva/${email}`);
  }
  cancelarReserva(reserva: Reserva) {
    return this.httpClient.put<Reserva>(`http://localhost:8080/reservas/usersCancel`, reserva);
  }
  obtenerListaReservas(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>('http://localhost:8080/reservas/listaReservas');
  }
}
