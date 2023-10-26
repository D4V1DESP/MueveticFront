import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute para obtener el ID de la URL
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-modificar-admin',
  templateUrl: './modificar-admin.component.html',
  styleUrls: ['./modificar-admin.component.css']
})

export class ModificarAdminComponent implements OnInit {
  adminData: Usuario = new Usuario(); // Objeto para almacenar los datos del administrador
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
      this.usuarioServicio.obtenerAdminPorEmail(email).subscribe((admin: Usuario) => {
        this.adminData = admin;
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
  modificarAdmin(email: string) {
    // Primero, obtén el administrador a modificar
    this.usuarioServicio.obtenerAdminPorEmail(email).subscribe((admin: Usuario) => {
      if (admin) {
        // Luego, modifica los datos del administrador
        this.adminData = admin;
        
        // Ahora, actualiza los datos del administrador en el servidor
        this.usuarioServicio.modificarDatosAdministrador(this.adminData).subscribe(
          (dato: any) => {
            if (dato.statusCode === 200) {
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
    });
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
