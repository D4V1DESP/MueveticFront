import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {
  constructor(private UsuarioService: UsuarioService, private router: Router) { }
  usuario = {//objeto en el que cargamos la información para enviarlo más tarde
    email: "",
    contrasena: ""
  }

  onPulse() {
    console.log('email:', this.usuario.email);
    this.UsuarioService.recoverPass(this.usuario).subscribe(
      response => {
        if (response) {
          window.alert('Correo de recuperación enviado con exito');//mostramos una alerta si todo ha salido bien si el correo no exite la muestra también por como esta hecho en back el control de errores
          
        }
      },
      error => {
        window.alert('Error al enviar el correo de recuperación');

      }
    )
  }

}
