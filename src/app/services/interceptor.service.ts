import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token= localStorage.getItem('token');
    const tokenHeader= req.clone({
      setHeaders:{
        Authorization: `${token}` 
      }
    });
    return next.handle(tokenHeader);

}
constructor() { }

}
