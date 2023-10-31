import { Component } from '@angular/core';
import { AnadirUsuarioService } from '../anadir-usuario.service';

@Component({
  selector: 'app-anadir-mantenimiento',
  templateUrl: './anadir-mantenimiento.component.html',
  styleUrls: ['./anadir-mantenimiento.component.css'],
})

export class AnadirManComponent {
  constructor(private anadirUsuarioService: AnadirUsuarioService){

  }
    manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      experiencia:'',
      contrasena:'',
      repetirContrasena:'',
      activo:true,
      ciudad:'',
      tipo:'mantenimiento'
    }
  limpiarCampos() {
    this.manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      experiencia:'',
      contrasena:'',
      repetirContrasena:'',
      activo:true,
      ciudad:'',
      tipo:'mantenimiento'
    };
  }
  submitRegistro() {
    // Aquí puedes implementar la lógica para procesar los datos del formulario, como la validación y el envío al servidor.
    console.log('Datos del formulario:', this.manData);
    this.anadirUsuarioService.anadirUsuario(this.manData).subscribe(
      response=>{
        console.log('Los datos han sido enviados correctamente',response);
        this.mostrarLabelMensaje("Usuario añadido")
        
      },
      error=>{
        console.error('Error al enviar los datos',error);

      })
if (this.manData.contrasena.length < 8 ||
  !/[0-9]/.test(this.manData.contrasena) || // al menos un número
  !/[A-Z]/.test(this.manData.contrasena) || // al menos una letra mayúscula
  !/[!@#$%^&*]/.test(this.manData.contrasena)) {
  console.log('La contraseña debe tener al menos 8 caracteres.');
  this.mostrarLabelMensaje("Formato erroneo de contraseña (al menos 8 caracteres,1 mayúscula y 1 caracter raro)")
  return; // Aborta la función submitRegistro
}

if (this.manData.repetirContrasena !== this.manData.contrasena) {
  console.log('Las contraseñas no coinciden.');
  this.mostrarLabelMensaje("La contraseña repetida debe ser igual a la original")
   return;
    }
if (
  !this.manData.nombre ||
  !this.manData.apellidos ||
  !this.manData.dni ||
  !this.manData.email ||
  !this.manData.contrasena ||
  !this.manData.repetirContrasena
) {
  this.mostrarLabelMensaje("Todos los campos son obligatorios");
  return; // Detener el proceso de envío
}



// Resto de la lógica para procesar los datos y enviar al servidor


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

