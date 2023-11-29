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
    
    const excludedUrls : string[] = ['https://muevetic-zw7y.onrender.com/users/login', 'https://muevetic-zw7y.onrender.com/users/authenticate',
    'https://muevetic-zw7y.onrender.com/users/AddUser', 'https://muevetic-zw7y.onrender.com/users/updatePass',
    'https://muevetic-zw7y.onrender.comusers/recover','https://muevetic-zw7y.onrender.com/users/verify']

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
    return next.handle(JWToken);
  }
}

export const AutTokenInterceptor = {
  provide : HTTP_INTERCEPTORS,
  useClass : TokenInterceptorService,
  multi : true,
};
