import { Component } from '@angular/core';
import { Coche } from '../vehiculos';
import { AltaVehiculoService } from '../alta-vehiculo.service';



@Component({
  selector: 'app-anadir-coches',
  templateUrl: './anadir-coches.component.html',
  styleUrls: ['./anadir-coches.component.css']
})

export class AnadirCochesComponent {
  constructor(private AltaVehiculoService: AltaVehiculoService) { }
  
  onClickEnviar():void {
    let vehiculo={
    nPlazas: "4",
    matricula: "12345678hj",
    tipo: "Coche",
    modelo: "honda",
    bateria: "100",
    estado: "libre",
    direccion: "calle de la pantomima"}
     
    this.AltaVehiculoService.enviarVehiculo(vehiculo).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
      },
      error =>{
        console.error('Error al enviar datos:', error);
      }
    )
    
  }
  
  
}
