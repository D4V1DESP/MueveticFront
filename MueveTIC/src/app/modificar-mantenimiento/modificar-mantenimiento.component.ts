import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import { Mantenimiento } from '../usuario';

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
    private usuarioServicio: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');

    if (email) {
      this.usuarioServicio.obtenerMantenimientoPorEmail(email).subscribe((man: Mantenimiento) => {
        this.manData = man;
      });
    }
  }
  modificarMantenimiento(email: string) {
    if (
      !this.manData.nombre ||
      !this.manData.apellidos ||
      !this.manData.dni ||
      !this.manData.ciudad ||
      !this.manData.experiencia
    ) {
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return; // Detener el proceso de envío
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }
    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.manData.dni)) {
      console.log('El DNI debe tener 8 números y una letra.');
      this.mostrarLabelMensaje("El DNI debe tener 8 números y una letra");
      return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.manData.ciudad)) {
      console.log('La ciudad solo puede contener letras.');
      this.mostrarLabelMensaje("La ciudad solo puede contener letras");
      return;
    }

    if (isNaN(Number(this.manData.experiencia))
      || Number(this.manData.experiencia) < 0) {
      console.log('La experiencia debe ser un número positivo.');
      this.mostrarLabelMensaje("La experiencia debe ser un número positivo");
      return;
    }

    if (this.manData) {
      this.usuarioServicio.modificarDatosMantenimiento(this.manData).subscribe(
        (response: any) => {
          this.router.navigate(['/usuarios']);
          if (response.statusCode === 200) {
            this.mostrarAlerta('exito');

          } else {
            this.mostrarAlerta('error');
          }
        },
        (error) => {
          console.error('Error al modificar el administrador:', error);
          this.mostrarAlerta('error');
        }
      );
    } else {
      console.error('No se pudo obtener el administrador.');
      this.mostrarAlerta('error');
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

  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;

    }
  }
  limpiarCampos() {
    this.manData = {
      nombre: '',
      apellidos: '',
      dni: '',
      ciudad: '',
      email: '',
      experiencia: 0
    };
  }
}

