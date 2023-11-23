import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo, Coche, Moto, Patinete } from '../vehiculo';
import { OnInit} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

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
  
    constructor (private vehiculoService : VehiculoService,private UsuarioService: UsuarioService, private router: Router){}
  
      ngOnInit() : void{
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

    reservarVehiculo(vehiculo: any){
      let reserva = {
        matricula: vehiculo.matricula,
        email: this.UsuarioService.getLoggedUser().email,
        
      }
      console.log(reserva);
     this.vehiculoService.reservarVehiculo(reserva).subscribe(respuesta => {
        
        this.router.navigate(['/reservas-cliente']);
      });
    }
    toggleRow(index: number) {
      this.selectedRowIndex = index;
    }
    isRowSelected(index: number) {
      return index === this.selectedRowIndex;
    }
}
