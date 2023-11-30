import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-patinete',
  templateUrl: './anadir-patinete.component.html',
  styleUrls: ['./anadir-patinete.component.css']
})
export class AnadirPatineteComponent {

  constructor(private VehiculoService: VehiculoService, private router: Router) { }
  regex = /^\d{4}[a-zA-Z]{3}/
  patinete = {
    color: "",
    matricula: "",
    tipo: "Patinete",
    modelo: "",
    bateria: "100",
    estado: "disponible",
    direccion: ""
  }


  /**
 * Maneja el evento de clic en el botón de enviar para el formulario de registro de patinete.
 * Realiza validaciones en los campos del formulario y envía los datos del patinete al servicio correspondiente.
 * Muestra mensajes de error o éxito según sea necesario.
 */
  onClickEnviar(): void {
    // Verificar si algún campo del formulario está vacío.
    if (this.patinete.matricula === "" || this.patinete.modelo === "" || this.patinete.direccion === "") {
      this.mostrarLabelMensaje("Ningún campo debe estar vacío")
      return;
    }
     // Validar el formato de la matrícula (cuatro números seguidos de tres letras).
    if (!this.regex.test(this.patinete.matricula)) {
      this.mostrarLabelMensaje("Formato de matricula erroneo, el formato debe ser 3333LLL")
      return;
    }
    // Enviar los datos del patinete al servicio.
    this.VehiculoService.enviarVehiculo(this.patinete).subscribe(
      (response: any) => {
        console.log('Datos enviados con éxito:', response);
        this.router.navigate(['/vehiculos']);
        this.mostrarLabelMensaje("Patinete añadida con exito")
      },
      (error: any) => {
        console.error('Error al enviar datos:', error);
        if (error.status == '409') {
          this.mostrarLabelMensaje("Matricula ya registrada")
        }
        else
          this.mostrarLabelMensaje("Error en el envio")

      }
    )

  }
  /**
 * Muestra un mensaje en un elemento HTML con el id "mensajeResultado".
 *  El mensaje que se mostrará.
 */
  mostrarLabelMensaje(mensaje: string) {
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;
    }
  }
}


