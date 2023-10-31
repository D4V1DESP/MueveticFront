import { Component } from '@angular/core';
import { AnadirUsuarioService } from '../anadir-usuario.service';

@Component({
  selector: 'app-anadir-admin',
  templateUrl: './anadir-admin.component.html',
  styleUrls: ['./anadir-admin.component.css']
})
export class AnadirAdminComponent {
  constructor(private anadirUsuarioService: AnadirUsuarioService){
    
  }
  
    adminData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      contrasena:'',
      repetirContrasena:'',
      activo:true,
      tipo:'admin'
    }
    
    limpiarCampos() {
      this.adminData = {
        nombre: '',
        apellidos: '',
        dni: '',
        ciudad: '',
        email: '',
        contrasena:'',
      repetirContrasena:'',
      activo:true,
      tipo:'admin'
      };
    }
    submitRegistro() {
      // Aquí puedes implementar la lógica para procesar los datos del formulario, como la validación y el envío al servidor.
      console.log('Datos del formulario:', this.adminData);
      this.anadirUsuarioService.anadirUsuario(this.adminData).subscribe(
        response=>{
          console.log('Los datos han sido enviados correctamente',response);
          
        },
        error=>{
          console.error('Error al enviar los datos',error);
  
      })
  if (this.adminData.contrasena.length < 8 ||
    !/[0-9]/.test(this.adminData.contrasena) || // al menos un número
    !/[A-Z]/.test(this.adminData.contrasena) || // al menos una letra mayúscula
    !/[!@#$%^&*]/.test(this.adminData.contrasena)) {
    console.log('La contraseña debe tener al menos 8 caracteres.');
    this.mostrarLabelMensaje("Formato erroneo de contraseña (al menos 8 caracteres,1 mayúscula y 1 caracter raro)")
    return; // Aborta la función submitRegistro
  }
  if (this.adminData.repetirContrasena !== this.adminData.contrasena) {
    console.log('Las contraseñas no coinciden.');
    this.mostrarLabelMensaje("La contraseña repetida debe ser igual a la original")
    return;
    }
  if (
    !this.adminData.nombre ||
    !this.adminData.apellidos ||
    !this.adminData.dni ||
    !this.adminData.email ||
    !this.adminData.contrasena ||
    !this.adminData.repetirContrasena ||
    !this.adminData.ciudad
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
