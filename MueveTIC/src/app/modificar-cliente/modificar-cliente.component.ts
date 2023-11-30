import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import { Cliente } from '../usuario';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})

export class ModificarClienteComponent implements OnInit {
  clienteData: Cliente = new Cliente(); // Objeto para almacenar los datos del cliente
  openAlert: boolean = false;
  openAlert2: boolean = false;
  alertaAbierta: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private usuarioServicio: UsuarioService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');//sacamos el email de la ruta de la web

    if (email) {
      this.usuarioServicio.obtenerClientePorEmail(email).subscribe((cliente: Cliente) => {
        this.clienteData = cliente;//cargamos los datos en nuestro en el objeto cliente data
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
  modificarCliente(email: string) {
    if (
      !this.clienteData.nombre ||
      !this.clienteData.apellidos ||
      !this.clienteData.dni ||
      !this.clienteData.carnet ||
      !this.clienteData.telefono ||
      !this.clienteData.fecha
    ) {
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return; 
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.clienteData.nombre)) {
      console.log('El nombre solo puede contener letras.');
      this.mostrarLabelMensaje("El nombre solo puede contener letras");
      return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(this.clienteData.apellidos)) {
      console.log('Los apellidos solo pueden contener letras.');
      this.mostrarLabelMensaje("Los apellidos solo pueden contener letras");
      return;
    }

    const formatoDNI = /^\d{8}[a-zA-Z]$/;
    if (!formatoDNI.test(this.clienteData.dni)) {
      console.log('El DNI no tiene el formato correcto.');
      this.mostrarLabelMensaje("El DNI no tiene el formato correcto");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(this.clienteData.carnet)) {
      console.log('El carnet solo puede contener una letra.');
      this.mostrarLabelMensaje("El carnet solo puede contener una letra");
      return;
    }//controles de los campos

    if (this.clienteData) {
      this.usuarioServicio.modificarDatosCliente(this.clienteData).subscribe(
        (response: any) => {
          this.router.navigate(['/usuarios']);//si todo sale bien volvemos a la tabla de usuarios
          if (response.statusCode === 200) {
            this.mostrarAlerta('exito');

          } else {
            this.mostrarAlerta('error');
          }
        },
        (error) => {
          console.error('Error al modificar el cliente:', error);
          this.mostrarAlerta('error');
        }
      );
    } else {
      console.error('No se pudo obtener el cliente.');
      this.mostrarAlerta('error');
    }
  }

  mostrarLabelMensaje(mensaje: string) {//metodo para mostrar una label en caso de que necesites comunicar información a traves de la interfaz
    const mensajeResultado = document.getElementById("mensajeResultado");
    if (mensajeResultado) {
      mensajeResultado.style.display = "none";
      setTimeout(function () { mensajeResultado.style.display = "block" }, 200);
      mensajeResultado.innerText = mensaje;

    }
  }

  limpiarCampos() {
    this.clienteData = {
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      carnet: '',
      fecha: '',
      telefono: '',


    };
  }
}
