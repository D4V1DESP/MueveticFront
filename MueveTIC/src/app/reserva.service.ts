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
    return this.httpClient.get<Reserva>(`https://muevetic-zw7y.onrender.com/reservas/reservaActiva/${email}`);
  }
  obtenerListaReservasPoEmail(email: string): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(`https://muevetic-zw7y.onrender.com/reservas/reservasCliente/${email}`);
  }
  cancelarReserva(reserva: Reserva) {
    return this.httpClient.post<Reserva>('https://muevetic-zw7y.onrender.com/reservas/usersCancel', reserva);
  }
  obtenerListaReservas(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>('https://muevetic-zw7y.onrender.com/reservas/listaReservas');
  }
  finalizarReserva(reserva:Reserva){
    return this.httpClient.post('https://muevetic-zw7y.onrender.com/reservas/AddReview',reserva);
  }
  obtenerListaReservasMantenimientoPorEmail(email:string){
    return this.httpClient.get<ReservaMantenimiento[]>(`https://muevetic-zw7y.onrender.com/reservas/reservasMantenimiento/${email}`);
  }
  cancelarReservaMantenimiento(reserva: ReservaMantenimiento) {
    return this.httpClient.post<ReservaMantenimiento>('https://muevetic-zw7y.onrender.com/reservas/mantenimientoCancel', reserva);
  }
  finalizarReservaMantenimiento(reserva: ReservaMantenimiento) {
    return this.httpClient.post<ReservaMantenimiento>('https://muevetic-zw7y.onrender.com/reservas/mantenimientoFinalizar', reserva);
  }
}
