import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
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
    private usuarioServicio: UsuarioService
  ) {}

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');

    if (email) {
      this.usuarioServicio.obtenerClientePorEmail(email).subscribe((cliente: Cliente) => {
        this.clienteData = cliente;
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
    if (this.clienteData) {
      this.usuarioServicio.modificarDatosCliente(this.clienteData).subscribe(
        (response: any) => {
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
  limpiarCampos() {
    this.clienteData = {
      nombre: '',
      apellidos: '',
      dni: '',
      email: '',
      carnet: '',
      fecha_nacimiento: '',
      telefono: ''

      
    };
  }
}
