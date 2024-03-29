import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwtDto.model';
import { LoginUsuario } from '../model/login-usuario.model';
import { NuevoUsuario } from '../model/nuevo-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/';
  authURL = 'https://backend-portfolio-3o0v.onrender.com/auth/';


  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
 }
}
