import { Component } from '@angular/core';
import { AltaVehiculoService } from '../vehiculo.service';


@Component({
  selector: 'app-anadir-coches',
  templateUrl: './anadir-coches.component.html',
  styleUrls: ['./anadir-coches.component.css']
})

export class AnadirCochesComponent {
   regex = /^[0-9]{4}[a-zA-Z]{3}/

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
    if(this.coche.matricula==="" || this.coche.nPlazas==="" || this.coche.direccion==="" || this.coche.modelo===""){
      this.mostrarLabelMensaje("Ningún campo debe estar vacío")     
      return;
    }
    
    if(!this.regex.test(this.coche.matricula)){ 
      this.mostrarLabelMensaje("Formato de matricula erroneo, el formato debe ser 3333LLL")     
      return;
    }
    this.AltaVehiculoService.enviarVehiculo(this.coche).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        this.mostrarLabelMensaje("Coche añadido con exito")
        
      },
      error =>{
        console.error('Error al enviar datos:', error);
        if(error.status=='409'){
          this.mostrarLabelMensaje("Matricula ya registrada")
        }
        else
          this.mostrarLabelMensaje("Error en el envio")
        
      }
    )
    
  }
  mostrarLabelMensaje(mensaje:string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if(mensajeResultado){
      mensajeResultado.style.display="none";
      setTimeout(function() {mensajeResultado.style.display = "block"},200);
      mensajeResultado.innerText=mensaje;
    }
  }
  
  
}
