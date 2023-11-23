import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private usuarioService : UsuarioService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const excludedUrls : string[] = ['http://localhost:8080/users/login', 'http://localhost:8080/users/authenticate',
    'http://localhost:8080/users/AddUser']

    const shouldExclude = excludedUrls.some(url => req.url.includes(url));

    if (shouldExclude) {
      // Pass the request without any modifications
      return next.handle(req);
    }
    
    let token = this.usuarioService.token
    
    let JWToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    })

    console.log("CABECERA" + token)
    return next.handle(JWToken);
  }
}

export const AutTokenInterceptor = {
  provide : HTTP_INTERCEPTORS,
  useClass : TokenInterceptorService,
  multi : true,
};
