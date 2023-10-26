import { Component } from '@angular/core';
import { AltaVehiculoService } from '../alta-vehiculo.service';


@Component({
  selector: 'app-anadir-moto',
  templateUrl: './anadir-moto.component.html',
  styleUrls: ['./anadir-moto.component.css']
})
export class AnadirMotoComponent {
  constructor(private AltaVehiculoService: AltaVehiculoService) { }
  moto={
    casco:false,
    matricula:"",
    tipo: "Moto",
    modelo: "",
    bateria: "100",
    estado: "disponible",
    direccion: ""
  }
  


  onClickEnviar():void {
    
    const mensajeResultado = document.getElementById("mensajeResultado"); 
    this.AltaVehiculoService.enviarVehiculo(this.moto).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        if(mensajeResultado){
          mensajeResultado.style.display="inline";
          mensajeResultado.innerText="Moto añadida con exito"
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
