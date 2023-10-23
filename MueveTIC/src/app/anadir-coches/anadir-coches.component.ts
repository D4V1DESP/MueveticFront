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
    const mensajeResultado = document.getElementById("mensajeResultado");
    let vehiculo={
    nPlazas: "4",
    matricula: "12345678hjk",
    tipo: "Coche",
    modelo: "honda",
    bateria: "100",
    estado: "libre",
    direccion: "calle de la pantomima"
  }
     
    this.AltaVehiculoService.enviarVehiculo(vehiculo).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        if(mensajeResultado){
          mensajeResultado.style.display="inline";
          mensajeResultado.innerText="Coche añadido con exito"
        }
      },
      error =>{
        console.error('Error al enviar datos:', error);
        if(mensajeResultado && error.status=='409'){
          mensajeResultado.style.display= "inline";
          mensajeResultado.innerText="Matricula ya registrada"
        }
        
      }
    )
    
  }
  
  
}
