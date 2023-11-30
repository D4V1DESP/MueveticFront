import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../app/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private UsuarioService: UsuarioService, private router: Router, private authService: AuthenticationService) { }
  usuario = {
    email: "",
    contrasena: ""
  }
  verifyJson = {
    email: "",
    codigo: ""
  }
  mfaEnabled = false;
  otpCode = "";

  /**
 * Maneja el evento de inicio de sesión. Guarda los elementos en el sessionStorage,
 * envía las credenciales del usuario al servicio correspondiente y realiza acciones
 * según el tipo de usuario autenticado.
 */
  onLogin() {
    // Limpiar elementos de sessionStorage.
    this.saveSessionStorageItems("", "")
    // Enviar las credenciales del usuario al servicio de inicio de sesión.
    this.UsuarioService.userLogin(this.usuario).subscribe(
      response => {
        console.log('Datos enviados con éxito:', response);
        this.UsuarioService.saveLoggedUser(response);
        // Autenticar al usuario y realizar acciones según el tipo de usuario.
        this.UsuarioService.authenticate(this.usuario).subscribe(
          response => {
            // Verificar el rol del usuario autenticado.
            if (this.UsuarioService.getLoggedUser().experiencia) {
              this.saveSessionStorageItems(response, 'ROLE_MANTENIMIENTO')
              this.router.navigate(['/vista-mantenimiento']);

            } else if (this.UsuarioService.getLoggedUser().carnet) {
              console.log("2FA" + this.UsuarioService.getLoggedUser().mFaEnabled)
              if (this.UsuarioService.getLoggedUser().mFaEnabled) {
                this.mfaEnabled = true;
              } else {
                this.saveSessionStorageItems(response, 'ROLE_CLIENTE')
                this.router.navigate(['/usuarios-cliente']);
              }
            } else {
              this.saveSessionStorageItems(response, 'ROLE_ADMIN')
              this.router.navigate(['/usuarios']);
            }
          })
      },
      error => {
        console.error('Error al enviar datos:', error);

      }
    )
  }

  /**
 * Guarda información importante en el sessionStorage del navegador.
 *  El token de autenticación del usuario.
 *  - El rol del usuario.
 */
  saveSessionStorageItems(JWTToken: string, role: string) {
    // Guardar el rol del usuario en el servicio.
    this.UsuarioService.saveRole(role)
    // Guardar el token de autenticación del usuario en el servicio.
    this.UsuarioService.saveJWTUser(JWTToken)
  }
  /**
 * Verifica el código OTP ingresado por el usuario. Utiliza el servicio de autenticación
 * para enviar el código y realiza acciones según la respuesta del servidor.
 */
  verifyCode() {
    // Construir el objeto JSON con el email y el código OTP.
    this.verifyJson = {
      email: this.UsuarioService.getLoggedUser().email,
      codigo: this.otpCode
    };
    // Imprimir mensaje de verificación en la consola.
    console.log("VERIFICAR")
    // Enviar el código OTP al servicio de autenticación.
    this.authService.verifyCode(this.verifyJson).subscribe(
      response => {
        // Guardar información de sesión y redirigir según el rol del usuario.
        this.saveSessionStorageItems(response, 'ROLE_CLIENTE')
        this.router.navigate(['/usuarios-cliente']);
      }
    )
  }

}

