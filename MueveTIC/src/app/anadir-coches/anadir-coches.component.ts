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
  coche: Coche={
    n_plazas: '4',
    matricula: '12345678hj',
    tipo: 'coche',
    modelo: 'honda',
    bateria: 100,
    estado: 'libre',
    direccion: 'calle de la pantomima'
  }
  onClickEnviar():void {
    
    this.AltaVehiculoService.enviarVehiculo(this.coche).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response.data);
      },
      error =>{
        console.error('Error al enviar datos:', error);
      }
    )
    
  }
  
  
}
