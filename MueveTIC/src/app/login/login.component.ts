import { Component} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../app/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private UsuarioService: UsuarioService,private router: Router, private authService: AuthenticationService) { }
  usuario={
    email:"",
    contrasena:""
  } 
  verifyJson = {
    email: "",
    codigo: ""
  }
  mfaEnabled = false;
  otpCode = "";


  onLogin(){
    console.log('email:', this.usuario.email);
    console.log('contraseña:', this.usuario.contrasena);
    this.UsuarioService.userLogin(this.usuario).subscribe(
      response=>{
        
        this.UsuarioService.saveLoggedUser(response);

        if(this.UsuarioService.getLoggedUser().experiencia){
          //Save JWT
          this.router.navigate(['/usuarios']);
     
        }else if(this.UsuarioService.getLoggedUser().carnet){
          if(this.UsuarioService.getLoggedUser().mFaEnabled){
            this.mfaEnabled = true;
          }else{
            //Save JWT
            this.router.navigate(['/usuarios-cliente']);
          }
        }else {
          //Save JWT
          this.router.navigate(['/usuarios']);
        }
      },
      error =>{
        console.error('Error al enviar datos:', error);
      
      }
    )
  }
  
  verifyCode(){
    this.verifyJson = {
      email: this.UsuarioService.getLoggedUser().email,
      codigo: this.otpCode
    };
    console.log("VERIFICAR")
    this.authService.verifyCode(this.verifyJson).subscribe(
      response => {
        //Save JWT
        this.router.navigate(['/usuarios-cliente']);
      }
    )
  }

}

