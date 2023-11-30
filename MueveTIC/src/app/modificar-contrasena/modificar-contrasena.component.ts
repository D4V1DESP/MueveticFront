import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { TokenRecuperacion } from '../token-recuperacion';

@Component({
  selector: 'app-modificar-contrasena',
  templateUrl: './modificar-contrasena.component.html',
  styleUrls: ['./modificar-contrasena.component.css']
})
export class ModificarContrasenaComponent implements OnInit {
  constructor(private UsuarioService: UsuarioService, private router: Router) { }
  usuario = {
    contrasena: "",
    repetirContrasena: ""
  }

  urlCompleta: string = window.location.href;
  urlSeparada: string[] = this.urlCompleta.split('/');
  emailenc: string = this.urlSeparada.pop() ?? '';//sacamos el token  de la url para luego enviar al back


  ngOnInit(): void {
    console.log(this.emailenc);
  }
  onPulse() {
    if (

      !this.usuario.contrasena ||
      !this.usuario.repetirContrasena
    ) {
      this.mostrarLabelMensaje("Ningun campo debe estar vacio");
      return; //aborta la funcion 
    }
    if (this.usuario.contrasena.length < 8 ||
      !/\d/.test(this.usuario.contrasena) || // al menos un número
      !/[A-Z]/.test(this.usuario.contrasena) || // al menos una letra mayúscula
      !/[!@#$%^&*]/.test(this.usuario.contrasena)) {
      console.log('La contraseña debe tener al menos 8 caracteres, una letra mayuscula y un caraceter especial (!@#$%^&*)');
      this.mostrarLabelMensaje('La contraseña debe tener al menos 8 caracteres, una letra mayuscula y un caraceter especial (!@#$%^&*)')
      return; // Aborta la función submitRegistro
    }

    if (this.usuario.repetirContrasena !== this.usuario.contrasena) {
      console.log('Las contraseñas no coinciden.');
      this.mostrarLabelMensaje('Las contraseñas no coinciden.')
      return;
    }



    console.log('contraseña:', this.usuario.contrasena);
    const token: TokenRecuperacion = {//guardamos la informacion para enviarla al back
      email: this.emailenc,
      contrasena: this.usuario.contrasena,
      repetirContrasena: this.usuario.repetirContrasena
    };

    this.UsuarioService.updatePass(token).subscribe(//enviamos la información de las contraseñas y el token a back
      response => {
        console.log('contraseña enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
          this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al enviar datos:', error);

      }
    )
  }

  mostrarLabelMensaje(mensaje: string) {//metodo para mostrar una label en caso de que necesites comunicar información a traves de la interfaz
    const mensajeResultado = document.getElementById('mensaje');
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;
    }
  }

}
