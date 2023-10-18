import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  userData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: '',
    contrasena: '',
    repetirContrasena: ''
  };

  submitRegistro() {
    // Aquí puedes implementar la lógica para procesar los datos del formulario, como la validación y el envío al servidor.
    console.log('Datos del formulario:', this.userData);
  }
}
