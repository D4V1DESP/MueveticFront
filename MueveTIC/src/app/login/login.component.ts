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
        this.router.navigate(['/usuarios']);
      },
      error =>{
        console.error('Error al enviar datos:', error);
      
      }
    )
  }
  
}

