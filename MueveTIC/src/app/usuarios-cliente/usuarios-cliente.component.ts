import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios-cliente',
  templateUrl: './usuarios-cliente.component.html',
  styleUrls: ['./usuarios-cliente.component.css']
})
export class UsuariosClienteComponent implements OnInit {
    listaCoches : Vehiculo []
    listaMotos : Vehiculo []
    listaPatinetes : Vehiculo []
    isMouseOver: boolean = false; // Variable para controlar el paso del ratón
    selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada
  
    constructor (private vehiculoService : VehiculoService,private UsuarioService: UsuarioService){}
  
      ngOnInit() : void{
        console.log(this.UsuarioService.getLoggedUser().carnet)
        if (this.UsuarioService.getLoggedUser().carnet){
          this.obtenerVehiculosDisponibles();
        }
      }
  
    obtenerVehiculosDisponibles(){
      if (this.UsuarioService.getLoggedUser().carnet=== 'a' || this.UsuarioService.getLoggedUser().carnet=== 'c')
      this.vehiculoService.obtenerListaCochesDisponibles().subscribe(respuesta => {
        this.listaCoches = respuesta;
      });
      if (this.UsuarioService.getLoggedUser().carnet=== 'a' || this.UsuarioService.getLoggedUser().carnet=== 'm')
      this.vehiculoService.obtenerListaMotosDisponibles().subscribe(respuesta => {
        this.listaMotos = respuesta;
      });
      this.vehiculoService.obtenerListaPatinetesDisponibles().subscribe(respuesta => {
        this.listaPatinetes = respuesta;
      });
     
    }
  
    enviarPeticionReserva(){
    }
    
    
    toggleRow(index: number) {
      this.selectedRowIndex = index;
    }
    isRowSelected(index: number) {
      return index === this.selectedRowIndex;
    }
    

}
