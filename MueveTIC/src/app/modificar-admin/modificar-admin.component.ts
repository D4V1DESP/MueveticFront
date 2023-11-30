import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import { Administrador } from '../usuario';

@Component({
  selector: 'app-modificar-admin',
  templateUrl: './modificar-admin.component.html',
  styleUrls: ['./modificar-admin.component.css']
})

export class ModificarAdminComponent implements OnInit {
  adminData: Administrador = new Administrador(); // Objeto para almacenar los datos del administrador
  openAlert: boolean = false;
  openAlert2: boolean = false;
  alertaAbierta: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioServicio: UsuarioService,
    private router: Router
  ) { }
    /**
 * Inicializa el componente. Obtiene el parámetro 'email' de la URL mediante el servicio ActivatedRoute
 * y realiza una solicitud al servicio de usuario para obtener información del administrador por ese email.
 */
  ngOnInit(): void {
    // Obtener el parámetro 'email' de la URL.
    const email = this.route.snapshot.paramMap.get('email');
    // Verificar si se proporcionó un email.
    if (email) {
      // Realizar una solicitud al servicio de usuario para obtener información del administrador por ese email.
      this.usuarioServicio.obtenerAdminPorEmail(email).subscribe((admin: Administrador) => {
        // Al recibir la respuesta, asignar los datos del administrador a la variable adminData.
        this.adminData = admin;
      });
    }

  }
  /**
 * Activa la visualización de una alerta o componente en el template.
 */
  imprimirTexto() {
    this.openAlert = true;
  }
  /**
 * Activa la visualización de una alerta o componente en el template.
 */
  imprimirTexto2() {
    this.openAlert2 = true;
  }
  /**
 * Muestra una alerta específica estableciendo la variable 'alertaAbierta'.
 * - El mensaje de la alerta que se va a mostrar.
 */
  mostrarAlerta(alerta: string) {
    this.alertaAbierta = alerta;
  }
  /**
 * Modifica los datos de un administrador. Realiza validaciones en los campos del formulario
 * y envía los datos al servicio correspondiente. Muestra mensajes de éxito o error según la respuesta del servidor.
 *- El correo electrónico del administrador que se va a modificar.
 */
  modificarAdmin(email: string) {
    if (
      !this.adminData.nombre ||
      !this.adminData.apellidos ||
      !this.adminData.dni ||
      !this.adminData.ciudad
    ) {
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return; // Detener el proceso de envío
    }
    // Validar que el nombre solo contenga letras.
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }
    
  // Validar que los apellidos solo contengan letras.
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }
    // Validar el formato del DNI (8 números y una letra).
    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.adminData.dni)) {
      console.log('El DNI no tiene el formato correcto.');
      this.mostrarLabelMensaje("El DNI no tiene el formato correcto");
      return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.adminData.ciudad)) {
      console.log('La ciudad solo puede contener letras.');
      this.mostrarLabelMensaje("La ciudad solo puede contener letras");
      return;
    }
    // Verificar si existe la variable adminData.
    if (this.adminData) {
      // Enviar los datos del administrador al servicio de usuario para su modificación.
      this.usuarioServicio.modificarDatosAdministrador(this.adminData).subscribe(
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
      console.error('No se pudo modificar el administrador.');
      this.mostrarAlerta('error');
    }
  }
  /**
 * Muestra un mensaje en un elemento HTML con el id "mensajeResultado".
 * - El mensaje que se mostrará.
 */
  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;

    }
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
