import { Component } from '@angular/core';
import { AltaVehiculoService } from '../alta-vehiculo.service';


@Component({
  selector: 'app-anadir-coches',
  templateUrl: './anadir-coches.component.html',
  styleUrls: ['./anadir-coches.component.css']
})

export class AnadirCochesComponent {

  constructor(private AltaVehiculoService: AltaVehiculoService) { }
  coche={
    nPlazas:"",
    matricula:"",
    tipo: "Coche",
    modelo: "",
    bateria: "100",
    estado: "disponible",
    direccion: ""
  }
  


  onClickEnviar():void {
    
    const mensajeResultado = document.getElementById("mensajeResultado"); 
    this.AltaVehiculoService.enviarVehiculo(this.coche).subscribe(
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
