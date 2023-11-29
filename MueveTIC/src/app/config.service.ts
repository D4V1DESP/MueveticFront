import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  obtenerInformacionConfiguracion(): Observable<Config[]>{
    return this.httpClient.get<Config[]>('https://muevetic-zw7y.onrender.com/config/Get');
  }
  modificarInformacionConfiguracion(config:Config){
    return this.httpClient.post('https://muevetic-zw7y.onrender.com/config/Update',config);
  }
}
