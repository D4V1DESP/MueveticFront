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
  alertaAbierta: string = ''; // Variable para gestionar alertas
  adminData = {
    nombre: '',
    apellidos: '',
    dni: '',
    ciudad: '',
    email: ''
  }
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

  mostrarAlerta(alerta: string) {
    // Lógica para mostrar alertas
    this.alertaAbierta = alerta;
  }
}
