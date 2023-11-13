import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehiculos-cliente',
  templateUrl: './vehiculos-cliente.component.html',
  styleUrls: ['./vehiculos-cliente.component.css']
})
export class VehiculosClienteComponent {
  mostrarReservaActual = true; // Ajusta según tu lógica de visualización
  reservaActual: any; // La reserva actual del cliente

  constructor(private router: Router) {}

  tieneReservaActual(): boolean {
      return this.mostrarReservaActual && this.reservaActual != null;
  }
  
  
  navegarAVehiculos() {
    this.router.navigate(['/vehiculos-cliente']);
  }

  mostrarReservaActualTab() {
    this.mostrarReservaActual = true;
  }

  ocultarReservaActualTab() {
    this.mostrarReservaActual = false;
  }
}
