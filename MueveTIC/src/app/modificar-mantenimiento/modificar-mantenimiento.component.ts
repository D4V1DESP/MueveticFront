import { Component } from '@angular/core';
import { ModificarUsuarioService } from '../modificar-usuario.service';

@Component({
  selector: 'app-modificar-mantenimiento',
  templateUrl: './modificar-mantenimiento.component.html',
  styleUrls: ['./modificar-mantenimiento.component.css']
})
export class ModificarManComponent {
  constructor(private modificarUsuarioService: ModificarUsuarioService){

  }
  openAlert: boolean = false;
  openAlert2: boolean = false;
  alertaAbierta: string | null = null;

  manData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: '',
    exp:''
  }
  imprimirTexto() {
    this.openAlert = true;
  }
  imprimirTexto2() {
    this.openAlert2 = true;
  }
  mostrarAlerta(alerta: string) {
    this.alertaAbierta = alerta;
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

