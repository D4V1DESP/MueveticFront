import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  constructor(private usuarioService: UsuarioService, private router: Router) {
    
  }
  userData = {
    email: '',
    nombre: '',
    apellidos: '',
    dni: '',
    contrasena: '',
    repetirContrasena: '',
    activo: true,
    fecha: '',
    carnet: "",
    telefono:"",
    tipo: "cliente"
  }

  submitRegistro() {
    
    if (this.userData.email == "" || this.userData.nombre == "" ||
      this.userData.apellidos == "" || this.userData.dni == "" || 
      this.userData.contrasena == "" || this.userData.repetirContrasena == "" || 
      this.userData.fecha == "" || this.userData.telefono == "") {
        this.mostrarLabelMensaje("Ningun campo debe estar vacio");
       return; //aborta la funcion submitRegistro
    }
    if (!/^(\d{8})([A-Z])$/.test(this.userData.dni)) {
      console.log('El DNI no es válido. Formato del DNI es incorrecto.');
      this.mostrarLabelMensaje('El DNI no es válido. Formato del DNI es incorrecto.')
      return; // Aborta la función submitRegistro
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.userData.email)) {
        console.log('El email no es válido. Debe tener un formato de email correcto.');
        this.mostrarLabelMensaje("El email no es válido. Debe tener un formato de email correcto.")
        return; // Aborta la función submitRegistro
    }

    if (!/^\d{9}$/.test(this.userData.telefono)) {
      console.log('El telefono no es válido. Debe tener un formato de telefono correcto.');
      this.mostrarLabelMensaje("El telefono no es válido. Debe tener un formato de telefono correcto.")
      return; // Aborta la función submitRegistro
    }

    if (this.userData.contrasena.length < 8 ||
      !/[0-9]/.test(this.userData.contrasena) || // al menos un número
      !/[A-Z]/.test(this.userData.contrasena) || // al menos una letra mayúscula
      !/[!@#$%^&*]/.test(this.userData.contrasena)) {
      console.log('La contraseña debe tener al menos 8 caracteres, una letra mayuscula y un caraceter especial (!@#$%^&*)');
      this.mostrarLabelMensaje('La contraseña debe tener al menos 8 caracteres, una letra mayuscula y un caraceter especial (!@#$%^&*)')
      return; // Aborta la función submitRegistro
    }

    if (this.userData.repetirContrasena !== this.userData.contrasena) {
      console.log('Las contraseñas no coinciden.');
      this.mostrarLabelMensaje('Las contraseñas no coinciden.')
      return;
    }

    this.userData.carnet=this.userData.carnet.charAt(0)
    this.usuarioService.anadirUsuario(this.userData).subscribe(
      response=>{
        console.log('Los datos han sido enviados correctamente',response);
        this.mostrarLabelMensaje("Usuario registrado correctamente");
        this.router.navigate(['/login']);

      },
      error=>{
        console.error('Error al enviar los datos',error);
        console.log(this.userData)
        if(error.status=='409'){
          this.mostrarLabelMensaje("Usuario ya esta registrado");
        }
    })
    
    };
    mostrarLabelMensaje(mensaje:string) {
      const mensajeResultado = document.getElementById('mensaje');
      if(mensajeResultado){
        mensajeResultado.style.display="none";
        setTimeout(function() {mensajeResultado.style.display = "block"},200);
        mensajeResultado.innerText=mensaje;
      }
    }
}