import { Component } from '@angular/core';
import { AltaVehiculoService } from '../alta-vehiculo.service';

@Component({
  selector: 'app-anadir-patinete',
  templateUrl: './anadir-patinete.component.html',
  styleUrls: ['./anadir-patinete.component.css']
})
export class AnadirPatineteComponent {

    constructor(private AltaVehiculoService: AltaVehiculoService) { }
    patinete={
      color:"",
      matricula:"",
      tipo: "Patinete",
      modelo: "",
      bateria: "100",
      estado: "disponible",
      direccion: ""
    }
    
  
  
    onClickEnviar():void {
      
      const mensajeResultado = document.getElementById("mensajeResultado"); 
      this.AltaVehiculoService.enviarVehiculo(this.patinete).subscribe(
        response=>{
          console.log('Datos enviados con éxito:', response);
          if(mensajeResultado){
            mensajeResultado.style.display="inline";
            mensajeResultado.innerText="Patinete añadido con exito"
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
  

