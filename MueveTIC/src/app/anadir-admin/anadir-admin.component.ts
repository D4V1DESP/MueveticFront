import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anadir-admin',
  templateUrl: './anadir-admin.component.html',
  styleUrls: ['./anadir-admin.component.css']
})
export class AnadirAdminComponent {
  constructor(private usuarioService: UsuarioService, private router: Router) {

  }
  adminData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: '',
    contrasena: '',
    repetirContrasena: '',
    activo: true,
    tipo: 'admin'
  }

  limpiarCampos() {
    this.adminData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      contrasena: '',
      repetirContrasena: '',
      activo: true,
      tipo: 'admin'
    };
  }
  submitRegistro() {
    if (
      !this.adminData.nombre ||
      !this.adminData.apellidos ||
      !this.adminData.dni ||
      !this.adminData.email ||
      !this.adminData.ciudad ||
      !this.adminData.contrasena ||
      !this.adminData.repetirContrasena
    ) {
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }

    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.adminData.dni)) {
      console.log('El DNI no tiene el formato correcto.');
      this.mostrarLabelMensaje("El DNI no tiene el formato correcto");
      return;
    }
  
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.adminData.email)) {
      console.log('El email no tiene el formato correcto.');
      this.mostrarLabelMensaje("El email no tiene el formato correcto");
      return;
    }
  
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.ciudad)) {
      console.log('La ciudad solo puede contener letras.');
      this.mostrarLabelMensaje("La ciudad solo puede contener letras");
      return;
    }
  
    if (this.adminData.contrasena.length < 8 ||
      !/[0-9]/.test(this.adminData.contrasena) || // al menos un número
      !/[A-Z]/.test(this.adminData.contrasena) || // al menos una letra mayúscula
      !/[!@#$%^&*]/.test(this.adminData.contrasena)) {
      console.log('La contraseña debe tener al menos 8 caracteres.');
      this.mostrarLabelMensaje("Formato erróneo de contraseña (al menos 8 caracteres, 1 mayúscula y 1 caracter especial)");
      return;
    }
  
    if (this.adminData.repetirContrasena !== this.adminData.contrasena) {
      console.log('Las contraseñas no coinciden.');
      this.mostrarLabelMensaje("La contraseña repetida debe ser igual a la original");
      return;
    }
  
    console.log('Datos del formulario:', this.adminData);
    this.usuarioService.anadirUsuario(this.adminData).subscribe(
      response => {
        this.router.navigate(['/usuarios']);
        console.log('Los datos han sido enviados correctamente', response);
        this.mostrarLabelMensaje("Usuario añadido")
      },
      error => {
        console.error('Error al enviar los datos', error);
      })
  }
  
  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;

    }
  }

}
