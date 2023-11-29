import { Injectable } from '@angular/core';
import { Reserva } from './reserva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaMantenimiento } from './reservaMantenimiento';
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
  finalizarReserva(reserva:Reserva){
    return this.httpClient.post('http://localhost:8080/reservas/AddReview',reserva);
  }
  obtenerListaReservasMantenimientoPorEmail(email:string){
    return this.httpClient.get<ReservaMantenimiento[]>(`http://localhost:8080/reservas/reservasMantenimiento/${email}`);
  }
  cancelarReservaMantenimiento(reserva: ReservaMantenimiento) {
    return this.httpClient.post<ReservaMantenimiento>('http://localhost:8080/reservas/mantenimientoCancel', reserva);
  }
  finalizarReservaMantenimiento(reserva: ReservaMantenimiento) {
    return this.httpClient.post<ReservaMantenimiento>('http://localhost:8080/reservas/mantenimientoFinalizar', reserva);
  }
}
