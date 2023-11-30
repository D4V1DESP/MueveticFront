import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario, Mantenimiento, Cliente, Administrador } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  administradores: Administrador[] = [];
  clientes: Cliente[] = [];
  mantenimiento: Mantenimiento[] = [];
  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada

  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerAdministradores();
    this.obtenerClientes();
    this.obtenerMantenimiento();
  }
//realiza una llamada a la API REST de usuarios para obtener la lista de administradores.
  private obtenerAdministradores() {
    this.usuarioServicio.obtenerDatosAdministradores().subscribe((data: Administrador[]) => {
      this.administradores = data;
    });
  }
//realiza una llamada a la API REST de usuarios para obtener la lista de clientes.
  private obtenerClientes() {
    this.usuarioServicio.obtenerDatosClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }
//realiza una llamada a la API REST de usuarios para obtener la lista de usuarios de mantenimiento.
  private obtenerMantenimiento() {
    this.usuarioServicio.obtenerDatosMantenimiento().subscribe((data: Mantenimiento[]) => {
      this.mantenimiento = data;
    });
  }
  //elimina usuario
  eliminarUsuario(usuario: Usuario) {
    console.log('Eliminar usuario:', usuario);
  }
  //modifica usuario
  modificarUsuario(usuario: Usuario) {
    console.log('Modificar usuario:', usuario);
  }

  toggleRow(index: number) {
    this.selectedRowIndex = index;
  }

  isRowSelected(index: number) {
    return index === this.selectedRowIndex;
  }
}
