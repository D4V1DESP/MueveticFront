import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../usuario.service'; // Asegúrate de que la ruta sea correcta
import { Usuario } from '../usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit{
  usuarios : Usuario[]
  constructor(private usuarioServicio:UsuarioService) {}

  ngOnInit(): void {
      this.obtenerUsuarios();
      
  }
  private obtenerUsuarios(){
    this.usuarioServicio.obtenerInformacionUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
}
