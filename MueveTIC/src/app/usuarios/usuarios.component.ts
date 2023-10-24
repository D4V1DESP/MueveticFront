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
  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada

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
  eliminarUsuario(usuario: Usuario) {
    // Lógica para eliminar el usuario (puedes implementarla)
    console.log('Eliminar usuario:', usuario);
  }

  modificarUsuario(usuario: Usuario) {
    // Lógica para modificar el usuario (puedes implementarla)
    console.log('Modificar usuario:', usuario);
  }

  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }

  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
}
