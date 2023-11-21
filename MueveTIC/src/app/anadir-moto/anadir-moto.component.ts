import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anadir-moto',
  templateUrl: './anadir-moto.component.html',
  styleUrls: ['./anadir-moto.component.css']
})
export class AnadirMotoComponent {
  regex = /^[0-9]{4}[a-zA-Z]{3}/
  constructor(private VehiculoService: VehiculoService,private router: Router) { }
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
    
    if(this.moto.matricula==="" || this.moto.modelo==="" || this.moto.direccion==="" ){
      this.mostrarLabelMensaje("Ningún campo debe estar vacío")     
      return;
    }
    if(!this.regex.test(this.moto.matricula)){ 
      this.mostrarLabelMensaje("Formato de matricula erroneo, el formato debe ser 3333LLL")     
      return;
    }
    this.VehiculoService.enviarVehiculo(this.moto).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        this.mostrarLabelMensaje("Moto añadida con exito")
        this.router.navigate(['/vehiculos']);
        
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
