import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroUsuariosService } from '../registro-usuarios.service';



@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  constructor(private registroUsuariosService: RegistroUsuariosService) {
    
  }
  userData = {
    email: '',
    nombre: '',
    apellidos: '',
    dni: '',
    contrasena: '',
    repetirContrasena: '',
    activo: true,
    ciudad: '',
    //fechaNan: '',
    tipo: 'admin'
  }

  submitRegistro() {

    if (this.userData.contrasena.length < 8 ||
      !/[0-9]/.test(this.userData.contrasena) || // al menos un número
      !/[A-Z]/.test(this.userData.contrasena) || // al menos una letra mayúscula
      !/[!@#$%^&*]/.test(this.userData.contrasena)) {
      console.log('La contraseña debe tener al menos 8 caracteres.');
      return; // Aborta la función submitRegistro
    }
    if (this.userData.repetirContrasena !== this.userData.contrasena) {
      console.log('Las contraseñas no coinciden.');
      return;
    }
    const dni = this.userData.dni;
    if (!/^(\d{8})([A-Z])$/.test(dni)) {
        console.log('El DNI no es válido. Formato del DNI es incorrecto.');
        return; // Aborta la función submitRegistro
    }
    const email = this.userData.email;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log('El email no es válido. Debe tener un formato de email correcto.');
        return; // Aborta la función submitRegistro
    }
    
     const mensaje =document.getElementById('mensaje');
     if (this.userData.email == "" || this.userData.nombre == "" || this.userData.apellidos == "" || this.userData.dni == "" || this.userData.contrasena == "" || this.userData.repetirContrasena == "" || this.userData.ciudad == "" || this.userData.tipo !== "admin") {
       if(mensaje)mensaje.style.display="inline", mensaje.innerText="Ningun campo debe estar vacio";
       return; //aborta la funcion submitRegistro
     }
    
    this.registroUsuariosService.enviarUsuario(this.userData).subscribe(
      response=>{
        console.log('Los datos han sido enviados correctamente',response);
        if(mensaje){
          mensaje.style.display="inline";
          mensaje.innerText="Usuario registrado correctamente";
        }
        
      },
      error=>{
        console.error('Error al enviar los datos',error);
        if(mensaje && error.status=='409'){
          mensaje.style.display="inline";
          mensaje.innerText="Usuario ya esta registrado";
        }
    })
    
    };
}