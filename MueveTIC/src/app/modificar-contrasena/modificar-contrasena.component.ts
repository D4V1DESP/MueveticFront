import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Token } from '@angular/compiler';
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
  emailenc: string = this.urlSeparada.pop() || '';


  ngOnInit(): void {
    console.log(this.emailenc);
  }
  onPulse() {
    console.log('contraseña:', this.usuario.contrasena);
    const token: TokenRecuperacion = {
      email: this.emailenc,
      contrasena: this.usuario.contrasena,
      repetirContrasena: this.usuario.repetirContrasena
    };

    this.UsuarioService.updatePass(token).subscribe(
      response => {
        console.log('contraseña enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
        if (this.UsuarioService.getLoggedUser().experiencia)
          this.router.navigate(['/login']);
        /*se ha de cambiar a la ruta predeterminada del personal de mantenimiento*/
        else if (this.UsuarioService.getLoggedUser().carnet)
          this.router.navigate(['/login']);
        else
          this.router.navigate(['/login']);

        /*console.log(this.UsuarioService.getLoggedUser().email)*/

      },
      error => {
        console.error('Error al enviar datos:', error);

      }
    )
  }

}
