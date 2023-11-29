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
    this.saveSessionStorageItems("", "")
    this.UsuarioService.userLogin(this.usuario).subscribe(
      response=>{
        console.log('Datos enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
        this.UsuarioService.authenticate(this.usuario).subscribe(
          response =>{
        if(this.UsuarioService.getLoggedUser().experiencia){
          this.saveSessionStorageItems(response, 'ROLE_MANTENIMIENTO')
          this.router.navigate(['/vista-mantenimiento']);

        }else if(this.UsuarioService.getLoggedUser().carnet){
          console.log("2FA" + this.UsuarioService.getLoggedUser().mFaEnabled)
          if(this.UsuarioService.getLoggedUser().mFaEnabled){
            this.mfaEnabled = true;
          }else{
            this.saveSessionStorageItems(response, 'ROLE_CLIENTE')
            this.router.navigate(['/usuarios-cliente']);
          }
        }else {
          this.saveSessionStorageItems(response, 'ROLE_ADMIN')
          this.router.navigate(['/usuarios']);
        }
      })
      },
      error =>{
        console.error('Error al enviar datos:', error);
      
      }
    )
  }

  saveSessionStorageItems(JWTToken : string, role : string){
    this.UsuarioService.saveRole(role)
    this.UsuarioService.saveJWTUser(JWTToken)
  }
  
  verifyCode(){
    this.verifyJson = {
      email: this.UsuarioService.getLoggedUser().email,
      codigo: this.otpCode
    };
    console.log("VERIFICAR")
    this.authService.verifyCode(this.verifyJson).subscribe(
      response => {
        this.saveSessionStorageItems(response, 'ROLE_CLIENTE')
        this.router.navigate(['/usuarios-cliente']);
      }
    )
  }

}

