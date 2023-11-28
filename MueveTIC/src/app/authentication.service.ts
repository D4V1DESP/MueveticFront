import { Injectable } from '@angular/core';
import {AuthenticationResponse} from "../app/authentication-response";
import {VerificationRequest} from "../app/verification-request";
import {AuthenticationRequest} from "../app/authentication-request";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   private baseUrl = 'http://localhost:8080/api/v1/auth' 

  constructor(private http: HttpClient) { }

/*
  registro(registerRequest: RegisterRequest) {
    return this.http.post<AuthData>
    (`${this.baseUrl}/registro-usuarios`, registro-usuarios.userData);
  }*/

  
  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>
    /*(`${this.baseUrl}/authenticate`, authRequest);*/
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>(this.baseUrl,verificationRequest)
    /*(`${this.baseUrl}/verify`, verificationRequest);*/
  }
}

