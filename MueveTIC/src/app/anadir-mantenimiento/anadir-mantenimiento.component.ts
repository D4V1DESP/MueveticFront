import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-anadir-mantenimiento',
  templateUrl: './anadir-mantenimiento.component.html',
  styleUrls: ['./anadir-mantenimiento.component.css'],
})
export class AnadirManComponent {
  constructor(private usuarioService: UsuarioService, private router: Router) {

  }
  manData = {
    nombre: '',
    apellidos: '',
    dni: '',
    email: '',
    experiencia: '',
    contrasena: '',
    repetirContrasena: '',
    activo: true,
    ciudad: '',
    tipo: 'mantenimiento'
  }
  limpiarCampos() {
    this.manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      experiencia: '',
      contrasena: '',
      repetirContrasena: '',
      activo: true,
      ciudad: '',
      tipo: 'mantenimiento'
    };
  }

  /**
 * Maneja el envío de un formulario de registro de usuario. Realiza validaciones en los campos
 * del formulario y envía los datos al servicio correspondiente. Muestra mensajes de error o éxito según sea necesario.
 */

  submitRegistro() {
    // Verificar si algún campo del formulario está vacío.
    if (
      !this.manData.nombre ||
      !this.manData.apellidos ||
      !this.manData.dni ||
      !this.manData.email ||
      !this.manData.ciudad ||
      !this.manData.experiencia ||
      !this.manData.contrasena ||
      !this.manData.repetirContrasena
    ) {
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return; // Detener el proceso de envío
    }
    // Validar que el nombre solo contenga letras.
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }
     // Validar que los apellidos solo contengan letras.
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }
    // Validar el formato del DNI (8 números y una letra).
    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.manData.dni)) {
      console.log('El DNI debe tener 8 números y una letra.');
      this.mostrarLabelMensaje("El DNI debe tener 8 números y una letra");
      return;
    }
    // Validar el formato del email.
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.manData.email)) {
      console.log('El email no tiene el formato correcto.');
      this.mostrarLabelMensaje("El email no tiene el formato correcto");
      return;
    }
    // Validar que la ciudad solo contenga letras.
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.ciudad)) {
      console.log('La ciudad solo puede contener letras.');
      this.mostrarLabelMensaje("La ciudad solo puede contener letras");
      return;
    }
    // Validar que la experiencia sea un número positivo.
    if (isNaN(Number(this.manData.experiencia))
      || Number(this.manData.experiencia) < 0) {
      console.log('La experiencia debe ser un número positivo.');
      this.mostrarLabelMensaje("La experiencia debe ser un número positivo");
      return;
    }
    // Validar el formato de la contraseña.
    if (this.manData.contrasena.length < 8 ||
      !/\d/.test(this.manData.contrasena) || // al menos un número
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

    console.log('Datos del formulario:', this.manData);
    this.usuarioService.anadirUsuario(this.manData).subscribe(
      response => {
        this.router.navigate(['/usuarios'])
        console.log('Los datos han sido enviados correctamente', response);
        this.mostrarLabelMensaje("Usuario añadido")

      },
      error => {
        console.error('Error al enviar los datos', error);

      })
  }
/**
 * Muestra un mensaje en un elemento HTML con el id "mensajeResultado".
 * - El mensaje que se mostrará.
 */

  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;

    }
  }

}

