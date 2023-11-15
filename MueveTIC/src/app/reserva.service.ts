import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrlAnadirPeticion= "";

  
  constructor(private httpService: HttpClient) { }


  anadirPeticion(infopeticion : any){
    return this.httpService.post(this.baseUrlAnadirPeticion, infopeticion);
  }
}
