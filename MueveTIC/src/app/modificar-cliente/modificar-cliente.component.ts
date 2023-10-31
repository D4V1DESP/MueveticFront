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
