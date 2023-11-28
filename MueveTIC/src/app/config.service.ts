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
    return this.httpClient.get<Config[]>('http://localhost:8080/config/Get');
  }
  modificarInformacionConfiguracion(config:Config){
    return this.httpClient.post('http://localhost:8080/config/Update',config);
  }
}
