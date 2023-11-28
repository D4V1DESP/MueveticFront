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
    this.UsuarioService.userLogin(this.usuario).subscribe(
      response=>{
        this.UsuarioService.saveLoggedUser(this.usuario)
        //console.log("Nuevo Token" + this.UsuarioService.authenticate(this.usuario))
        this.UsuarioService.authenticate(this.usuario).subscribe(
          response=>{
            
            if(this.UsuarioService.getLoggedUser().experiencia){
              this.saveSessionStorageItems(response, 'ROLE_MANTENIMIENTO')
              this.router.navigate(['/vista-mantenimiento']);
            /*se ha de cambiar a la ruta predeterminada del personal de mantenimiento*/
            }else if(this.UsuarioService.getLoggedUser().carnet){
              this.saveSessionStorageItems(response, 'ROLE_CLIENTE')
              this.router.navigate(['/usuarios-cliente']);
            }else{
              this.saveSessionStorageItems(response, 'ROLE_ADMIN')
              this.router.navigate(['/usuarios']);
            }


        /*console.log(this.UsuarioService.getLoggedUser().email)*/
          }
        )
        console.log('Datos enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
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
  
}

