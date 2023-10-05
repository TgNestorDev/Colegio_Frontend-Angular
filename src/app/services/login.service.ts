import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { DatosLogin, DatosToken } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_API: string = config.URL_BASE + '/api/login';

  constructor(private http: HttpClient) {}

  postLogin(DatosUsuario: DatosLogin) {
    return this.http.post<DatosToken>(this.URL_API, DatosUsuario);

  }


}
