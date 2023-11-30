import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-cliente',
  templateUrl: './usuarios-cliente.component.html',
  styleUrls: ['./usuarios-cliente.component.css']
})
export class UsuariosClienteComponent implements OnInit {

  listaCoches: Vehiculo[]
  listaMotos: Vehiculo[]
  listaPatinetes: Vehiculo[]
  isMouseOver: boolean = false; // Variable para controlar el paso del ratón
  selectedRowIndex: number = -1; // Variable para controlar la fila seleccionada

  constructor(private vehiculoService: VehiculoService, private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if (this.UsuarioService.getLoggedUser().carnet) {
      this.obtenerVehiculosDisponibles();
    }
  }
  //cancelar la suscripción del usuario a la aplicación. Antes de realizar la llamada a la API REST, 
  //comprueba que el usuario no tiene reservas activas. 
  //Si el usuario tiene reservas activas, se muestra un mensaje de error.
  darseBaja() {

    this.UsuarioService.darseBaja(this.UsuarioService.getLoggedUser().email).subscribe(
      respuesta => {

        console.log('Respuesta del servidor:', respuesta);
        this.router.navigate(['/login']);
      },
      error => {
        window.alert('Error al darse de baja: Tienes reservas activas');
        console.error('Error al darse de baja:', error);

      }
    );
  }
  //obtiene los vehículos disponibles en función del tipo de carnet de conducir del usuario. 
  //Llama a los métodos obtenerListaCochesDisponibles(), obtenerListaMotosDisponibles() y obtenerListaPatinetesDisponibles() 
  //para obtener los coches, motos y patinetes disponibles, respectivamente.
  obtenerVehiculosDisponibles() {
    if (this.UsuarioService.getLoggedUser().carnet === 'a' || this.UsuarioService.getLoggedUser().carnet === 'c')
      this.vehiculoService.obtenerListaCochesDisponibles().subscribe(respuesta => {
        this.listaCoches = respuesta;
      });
    if (this.UsuarioService.getLoggedUser().carnet === 'a' || this.UsuarioService.getLoggedUser().carnet === 'm')
      this.vehiculoService.obtenerListaMotosDisponibles().subscribe(respuesta => {
        this.listaMotos = respuesta;
      });
    this.vehiculoService.obtenerListaPatinetesDisponibles().subscribe(respuesta => {
      this.listaPatinetes = respuesta;
    });
  }
  //se utiliza para reservar un vehículo. Crea un objeto de reserva con el número de matrícula del vehículo y la dirección de correo electrónico del usuario. 
  //Luego, llama al método reservarVehiculo() del servicio VehiculoService para realizar la reserva. 
  //Si la reserva es exitosa, el usuario se redirige a la página reservas-cliente. 
  //Si hay un error, se muestra un mensaje al usuario.
  reservarVehiculo(vehiculo: any) {
    let reserva = {
      matricula: vehiculo.matricula,
      email: this.UsuarioService.getLoggedUser().email
    }
    console.log(reserva);
    this.vehiculoService.reservarVehiculo(reserva).subscribe(respuesta => {
      this.router.navigate(['/reservas-cliente']);
    },
      error => {
        if (error.status === 409) {
          window.alert('Ya tiene una reserva activa');
          console.log('Ya tiene una reserva activa');
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
