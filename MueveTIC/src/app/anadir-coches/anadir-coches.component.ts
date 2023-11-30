import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anadir-coches',
  templateUrl: './anadir-coches.component.html',
  styleUrls: ['./anadir-coches.component.css']
})

export class AnadirCochesComponent {

  constructor(private VehiculoService: VehiculoService, private router: Router) { }
  coche = {
    nPlazas: "",
    matricula: "",
    tipo: "Coche",
    modelo: "",
    bateria: "100",
    estado: "disponible",
    direccion: ""
  }


/**
 * Maneja el evento de clic en el botón de enviar. Realiza validaciones en los campos del formulario
 * y envía los datos del coche al servicio correspondiente. Muestra mensajes de error o éxito según sea necesario.
 */
  onClickEnviar(): void {
    if (this.coche.matricula === "" || this.coche.nPlazas === "" || this.coche.direccion === "" || this.coche.modelo === "") {
      this.mostrarLabelMensaje("Ningún campo debe estar vacío")
      return;
    }
    
  // Validar que solo se introduzcan números en el campo de plazas.
    if (!/^\d{1}/.test(this.coche.nPlazas)) {
      this.mostrarLabelMensaje("Porfavor solo introduzca numeros en el campo plazas")
      return;
    }
// Validar el formato de la matrícula (cuatro números seguidos de tres letras).
    if (!/^\d{4}[a-zA-Z]{3}/.test(this.coche.matricula)) {
      this.mostrarLabelMensaje("Formato de matricula erroneo, el formato debe ser 3333LLL")
      return;
    }
    // Enviar los datos del coche al servicio
    this.VehiculoService.enviarVehiculo(this.coche).subscribe(
      response => {
        console.log('Datos enviados con éxito:', response);
        this.mostrarLabelMensaje("Coche añadido con exito")
        this.router.navigate(['/vehiculos']);

      },
      error => {
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
