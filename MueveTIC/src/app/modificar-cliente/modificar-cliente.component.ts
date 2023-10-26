import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {
  openAlert: boolean = false;
  openAlert2: boolean = false;
  alertaAbierta: string | null = null;

  clientData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: '',
    contrasena:''
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
    this.clientData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      contrasena:''
    };
  }
}
