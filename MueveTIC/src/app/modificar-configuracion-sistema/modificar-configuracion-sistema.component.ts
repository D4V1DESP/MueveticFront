import { Component } from '@angular/core';
import { Config } from '../config';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-modificar-configuracion-sistema',
  templateUrl: './modificar-configuracion-sistema.component.html',
  styleUrls: ['./modificar-configuracion-sistema.component.css']
})
export class ModificarConfiguracionSistemaComponent {
  constructor(private configService: ConfigService){}
  listaConfig :Config[] =[];
  eurosViaje: Config={
    nombre: 'eurosViaje',
    valor: 1
  };
  bateriaViaje: Config={
    nombre: 'bateriaViaje',
    valor: 1
  };
  vehiculosManenimiento: Config={
    nombre: 'vehiculosManenimiento',
    valor: 1
  };
  bateriaRecarga: Config={
    nombre: 'bateriaRecarga',
    valor: 1
  };
  ngOnInit() : void {
    this.obtenerConfiguracion();

  }
  obtenerConfiguracion() {
     this.configService.obtenerInformacionConfiguracion().subscribe((data: Config[]) => {
      this.listaConfig = data;
      console.log(this.listaConfig)
      this.eurosViaje=this.listaConfig.find(config => config.nombre === 'eurosViaje')!;
      this.bateriaViaje=this.listaConfig.find(config => config.nombre === 'bateriaViaje')!;
      this.vehiculosManenimiento=this.listaConfig.find(config => config.nombre === 'vehiculosManenimiento')!;
      this.bateriaRecarga=this.listaConfig.find(config => config.nombre === 'bateriaRecarga')!;
    });
    /*!*/
  }
 


  modificarConfiguracion(){
    console.log(this.eurosViaje.valor)
  }
}
