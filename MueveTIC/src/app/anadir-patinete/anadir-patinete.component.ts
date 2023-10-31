import { Component } from '@angular/core';
import { AltaVehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-patinete',
  templateUrl: './anadir-patinete.component.html',
  styleUrls: ['./anadir-patinete.component.css']
})
export class AnadirPatineteComponent {

    constructor(private AltaVehiculoService: AltaVehiculoService,private router: Router) { }
    regex = /^[0-9]{4}[a-zA-Z]{3}/
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
      if(this.patinete.matricula==="" || this.patinete.modelo==="" || this.patinete.direccion==="" ){
      this.mostrarLabelMensaje("Ningún campo debe estar vacío")     
      return;
    }
    if(!this.regex.test(this.patinete.matricula)){ 
      this.mostrarLabelMensaje("Formato de matricula erroneo, el formato debe ser 3333LLL")     
      return;
    }
      this.AltaVehiculoService.enviarVehiculo(this.patinete).subscribe(
        response=>{
          console.log('Datos enviados con éxito:', response);
          this.router.navigate(['/vehiculos']);
          this.mostrarLabelMensaje("Patinete añadida con exito")
          
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
  

