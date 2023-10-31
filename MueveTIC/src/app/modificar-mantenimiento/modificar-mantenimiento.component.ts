import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import {Mantenimiento } from '../usuario';

@Component({
  selector: 'app-modificar-mantenimiento',
  templateUrl: './modificar-mantenimiento.component.html',
  styleUrls: ['./modificar-mantenimiento.component.css']
})

export class ModificarManComponent implements OnInit {
  manData: Mantenimiento = new Mantenimiento(); // Objeto para almacenar los datos del administrador
  openAlert: boolean = false;
  openAlert2: boolean = false;
  alertaAbierta: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioServicio: UsuarioService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');

    if (email) {
      this.usuarioServicio.obtenerMantenimientoPorEmail(email).subscribe((man: Mantenimiento) => {
        this.manData = man;
      });
    }
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

  modificarMantenimiento(email: string) {
    if (this.manData) {
      this.usuarioServicio.modificarDatosMantenimiento(this.manData).subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            this.mostrarAlerta('exito');
          } else {
            this.mostrarAlerta('error');
          }
        },
        (error) => {
          console.error('Error al modificar el mantenimiento:', error);
          this.mostrarAlerta('error');
        }
      );
    } else {
      console.error('No se pudo obtener el mantenimiento.');
      this.mostrarAlerta('error');
    }
  }

  limpiarCampos() {
    this.manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      experiencia:''
    };
  }
}

