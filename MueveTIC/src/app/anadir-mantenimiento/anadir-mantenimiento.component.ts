import { Component } from '@angular/core';

@Component({
  selector: 'app-anadir-mantenimiento',
  templateUrl: './anadir-mantenimiento.component.html',
  styleUrls: ['./anadir-mantenimiento.component.css']
})
export class AnadirMantenimientoComponent {
  manData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: '',
    exp:''
    }
  limpiarCampos() {
    this.manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      exp:''
    };
  }
}
