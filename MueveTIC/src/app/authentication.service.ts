import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   private baseUrl = "https://muevetic-zw7y.onrender.com/users/verify" 

  constructor(private http: HttpClient) { }

/*
  registro(registerRequest: RegisterRequest) {
    return this.http.post<AuthData>
    (`${this.baseUrl}/registro-usuarios`, registro-usuarios.userData);
  }*/



  verifyCode(json : any) : Observable<string>{
    return this.http.post(this.baseUrl,json, {responseType : 'text'})
    /*(`${this.baseUrl}/verify`, verificationRequest);*/
  }
}

