import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {
  constructor(private UsuarioService: UsuarioService,private router: Router) { }
  usuario={
    email:"",
    contrasena:""
  } 

  onPulse(){
    console.log('email:', this.usuario.email);
   /* console.log('contraseña:', this.usuario.contrasena);*/
    this.UsuarioService.userLogin(this.usuario).subscribe(/*userLogin no, el servicio necesario que haga manu*/ 
      response=>{
        console.log('Email enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
        if(this.UsuarioService.getLoggedUser().experiencia)
          this.router.navigate(['/modificar-contrasena']);
        /*se ha de cambiar a la ruta predeterminada del personal de mantenimiento*/
       /*else if(this.UsuarioService.getLoggedUser().carnet)
          this.router.navigate(['/usuarios-cliente']);
        else 
          this.router.navigate(['/usuarios']);

        /*console.log(this.UsuarioService.getLoggedUser().email)
        */
      },
      error =>{
        console.error('Error al enviar datos:', error);
      
      }
    )
  }
  
}
