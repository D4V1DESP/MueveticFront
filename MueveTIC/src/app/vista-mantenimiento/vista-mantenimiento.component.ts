import { Component } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { OnInit} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-mantenimiento',
  templateUrl: './vista-mantenimiento.component.html',
  styleUrls: ['./vista-mantenimiento.component.css']
})
export class VistaMantenimientoComponent implements OnInit {
    listaCoches : Vehiculo []
    listaMotos : Vehiculo []
    listaPatinetes : Vehiculo []
    isMouseOver: boolean = false; // Variable para controlar el paso del ratón
    selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada
  
    constructor (private vehiculoService : VehiculoService,private UsuarioService: UsuarioService, private router: Router){}
  
      ngOnInit() : void{
        if (this.UsuarioService.getLoggedUser().experiencia){
          this.obtenerVehiculosNoDisponibles();
        }
      }
  
    obtenerVehiculosNoDisponibles(){
      this.vehiculoService.obtenerListaVehiculosRecargables("Coche").subscribe(respuesta => {
        this.listaCoches = respuesta;
      });
      this.vehiculoService.obtenerListaVehiculosRecargables("Moto").subscribe(respuesta => {
        this.listaMotos = respuesta;
      });
      this.vehiculoService.obtenerListaVehiculosRecargables("Patinete").subscribe(respuesta => {
        this.listaPatinetes = respuesta;
      });
    }

    

    recargarVehiculo(vehiculo: any){
      let reserva = {
        matricula: vehiculo.matricula,
        email: this.UsuarioService.getLoggedUser().email
      }
      console.log(reserva);
      this.vehiculoService.recargarVehiculo(reserva).subscribe(respuesta => {
        window.alert('Has reservado el vehiculo: '+ reserva.matricula); 
      },
      error => {
        if (error.status === 409){
          window.alert('Limite de reservas alcanzado');
          console.log('Limite de reservas alcanzado');
        }
      },
      
      );
    }
    toggleRow(index: number) {
      this.selectedRowIndex = index;
    }
    isRowSelected(index: number) {
      return index === this.selectedRowIndex;
    }
}
