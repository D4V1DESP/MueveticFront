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
  obtenerListaReservasPoEmail(email: string): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(`http://localhost:8080/reservas/reservasCliente/${email}`);
  }
  cancelarReserva(reserva: Reserva) {
    return this.httpClient.post<Reserva>('http://localhost:8080/reservas/usersCancel', reserva);
  }
  obtenerListaReservas(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>('http://localhost:8080/reservas/listaReservas');
  }
}
