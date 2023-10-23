import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-anadir-admin',
  templateUrl: './anadir-admin.component.html',
  styleUrls: ['./anadir-admin.component.css']
})
export class AnadirAdminComponent {
  
    adminData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: ''
    }
    limpiarCampos() {
      this.adminData = {
        nombre: '',
        apellidos: '',
        dni: '',
        ciudad: '',
        email: ''
      };
    }
}
