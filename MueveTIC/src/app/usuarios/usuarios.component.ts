import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  administradores: Usuario[] = [];
  clientes: Usuario[] = [];
  mantenimiento: Usuario[] = [];

  constructor(private usuarioServicio: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerAdministradores();
    this.obtenerClientes();
    this.obtenerMantenimiento();
  }

  private obtenerAdministradores() {
    this.usuarioServicio.obtenerDatosAdministradores().subscribe((data: Usuario[]) => {
      this.administradores = data;
    });
  }

  private obtenerClientes() {
    this.usuarioServicio.obtenerDatosClientes().subscribe((data: Usuario[]) => {
      this.clientes = data;
    });
  }

  private obtenerMantenimiento() {
    this.usuarioServicio.obtenerDatosMantenimiento().subscribe((data: Usuario[]) => {
      this.mantenimiento = data;
    });
  }
}
