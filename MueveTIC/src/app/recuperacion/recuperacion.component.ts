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
  usuario = {
    email: "",
    contrasena: ""
  }

  onPulse() {
    console.log('email:', this.usuario.email);
    this.UsuarioService.recoverPass(this.usuario).subscribe(/*userLogin no, el servicio necesario que haga manu*/
      response => {
        if (response) {
          window.alert('Correo de recuperación enviado con exito');
          //this.router.navigate(['/pagina-bienvenida'])
        }
      },
      error => {
        window.alert('Error al enviar el correo de recuperación');

      }
    )
  }

}
