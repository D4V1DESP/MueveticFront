import { Component} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private UsuarioService: UsuarioService,private router: Router) { }
  usuario={
    email:"",
    contrasena:""
  } 


  onLogin(){
    console.log('email:', this.usuario.email);
    console.log('contraseña:', this.usuario.contrasena);
    this.UsuarioService.userLogin(this.usuario).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
        if(this.UsuarioService.getLoggedUser().experiencia)
          this.router.navigate(['/usuarios']);
        /*se ha de cambiar a la ruta predeterminada del personal de mantenimiento*/
        else if(this.UsuarioService.getLoggedUser().carnet)
          this.router.navigate(['/usuarios-cliente']);
        else 
          this.router.navigate(['/usuarios']);

        /*console.log(this.UsuarioService.getLoggedUser().email)*/
      },
      error =>{
        console.error('Error al enviar datos:', error);
      
      }
    )
  }
  
}

