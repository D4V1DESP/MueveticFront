import { Component } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-configuracion-sistema',
  templateUrl: './modificar-configuracion-sistema.component.html',
  styleUrls: ['./modificar-configuracion-sistema.component.css']
})
export class ModificarConfiguracionSistemaComponent {
  constructor(private configService: ConfigService, private router: Router) { }
  listaConfig: Config[] = [];
  eurosViaje: Config = {//inicializamos los objetos para almacenar la información de configuración
    nombre: 'eurosViaje',
    valor: 1
  };
  bateriaViaje: Config = {
    nombre: 'bateriaViaje',
    valor: 1
  };
  vehiculosManenimiento: Config = {
    nombre: 'vehiculosMantenimiento',
    valor: 1
  };
  bateriaRecarga: Config = {
    nombre: 'bateriaRecarga',
    valor: 1
  };
  ngOnInit(): void {
    this.obtenerConfiguracion();

  }
  obtenerConfiguracion() {
    this.configService.obtenerInformacionConfiguracion().subscribe((data: Config[]) => {//llamamos a back y cargamos la informacion en nuestros objetos
      this.listaConfig = data;
      console.log(this.listaConfig)
      this.eurosViaje = this.listaConfig.find(config => config.nombre === 'eurosViaje')!;
      this.bateriaViaje = this.listaConfig.find(config => config.nombre === 'bateriaViaje')!;
      this.vehiculosManenimiento = this.listaConfig.find(config => config.nombre === 'vehiculosMantenimiento')!;
      this.bateriaRecarga = this.listaConfig.find(config => config.nombre === 'bateriaRecarga')!;
    });
    /*!*/
  }



  modificarConfiguracion() {//llamamos al back para enviar la información que tiene que modificar en la base de datos
    console.log(this.eurosViaje.valor)
    this.configService.modificarInformacionConfiguracion(this.eurosViaje).subscribe(
      respuesta => {
        console.log("informacion de precio por viaje actualizada con exito", respuesta)
      },
      error => {
        console.error("Error al enviar información de precio por viaje", error)
      })
    this.configService.modificarInformacionConfiguracion(this.bateriaViaje).subscribe(
      respuesta => {
        console.log("informacion de bateria consumida por viaje actualizada con exito", respuesta)
      },
      error => {
        console.error("Error al enviar información de bateria consumida por viaje", error)
      })
    this.configService.modificarInformacionConfiguracion(this.vehiculosManenimiento).subscribe(
      respuesta => {
        console.log("informacion del número maximo de vehiculos reservados para recarga actualizada con exito", respuesta)
      },
      error => {
        console.error("Error al enviar información del número maximo de vehiculos reservados para recarga", error)
      })
    this.configService.modificarInformacionConfiguracion(this.bateriaRecarga).subscribe(
      respuesta => {
        console.log("informacion del umbral al que se debe recargar un coche actualizada con exito", respuesta)
      },
      error => {
        console.error("Error al enviar información del umbral al que se debe recargar un coche", error)
      })

    this.router.navigate(['/usuarios']);
  }
}
