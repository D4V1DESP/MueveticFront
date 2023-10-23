import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroUsuariosService } from '../registro-usuarios.service';


@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {
  constructor(private registroUsuariosService: RegistroUsuariosService) {}
    userData = {
    email: '',
    nombre: '',
    apellidos: '',
    dni: '',
    contrasena: '',
    repetirContrasena: '',
    activo: true,
    ciudad: '',
    tipo: 'admin'
  }

  submitRegistro() {

     const email =document.getElementById('email');
     if (email == null) {
       console.log('El email no puede estar vacio');
       return;
     }

    this.registroUsuariosService.enviarUsuario(this.userData).subscribe(
      response=>{
        console.log('Los datos han sido enviados correctamente',response);
        
      },
      error=>{
        console.error('Error al enviar los datos',error);

    })
    
    };
}