import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import {AuthenticationResponse} from "../../app/authentication-response";
import {AuthenticationService} from "../../app/authentication.service";
import {VerificationRequest} from "../../app/verification-request";



@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {

  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private usuarioService: UsuarioService, 
    private router: Router) {

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
    telefono: "",
    tipo: "cliente",
    mFaEnabled: '',
    otpCode: ''
  }

  submitRegistro() {

    if (
      
      !this.userData.nombre ||
      !this.userData.apellidos ||
      !this.userData.dni ||
      !this.userData.fecha ||
      !this.userData.email ||
      !this.userData.carnet ||
      !this.userData.telefono ||
      !this.userData.contrasena ||
      !this.userData.repetirContrasena
      ) {
      this.mostrarLabelMensaje("Ningun campo debe estar vacio");
      return; //aborta la funcion submitRegistro
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.userData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.userData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }

    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.userData.dni)) {
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
    this.userData.carnet = this.userData.carnet.charAt(0)
    this.usuarioService.anadirUsuario(this.userData).subscribe(
      response => {
        console.log('Los datos han sido enviados correctamente', response);
        this.mostrarLabelMensaje("Usuario registrado correctamente");
        this.router.navigate(['/login']);

      },
      error => {
        console.error('Error al enviar los datos', error);
        console.log(this.userData)
        if (error.status == '409') {
          this.mostrarLabelMensaje("Usuario ya esta registrado");
        }
      })

  };
  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById('mensaje');
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;
    }
  }


  verifyTfa() {
    /*this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Cuenta creada correctamente';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['/login']);
          }, 3000);
        }
      });
      */
  }
}