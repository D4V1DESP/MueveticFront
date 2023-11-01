import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import { Usuario, Cliente } from '../usuario';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})

export class ModificarClienteComponent implements OnInit {
  clienteData: Cliente = new Cliente(); // Objeto para almacenar los datos del administrador
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
      this.usuarioServicio.obtenerClientePorEmail(email).subscribe((cliente: Usuario) => {
        this.clienteData = cliente as Cliente;
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
    if(
      !this.clienteData.nombre ||
      !this.clienteData.apellidos ||
      !this.clienteData.dni ||
      !this.clienteData.carnet ||
      !this.clienteData.telefono ||
      !this.clienteData.fecha
    ){
      this.mostrarLabelMensaje("Todos los campos son obligatorios");
      return; // Detener el proceso de envío
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
    }

    if (this.clienteData) {
      this.usuarioServicio.modificarDatosCliente(this.clienteData).subscribe(
        (response: any) => {
          this.router.navigate(['/usuarios']);
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

  mostrarLabelMensaje(mensaje: string) {
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
      telefono: ''


    };
  }
}
