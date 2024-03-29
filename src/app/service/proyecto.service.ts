import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //URL = 'http://localhost:8080/proyecto/'
  expURL = 'https://backend-portfolio-3o0v.onrender.com/proyecto/'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.expURL + 'lista');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.expURL + 'detail/' + id);
  }

  public save(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', proyecto);
  }

  public update(id: number, proyecto:Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.expURL + 'update/' + id, proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'delete/' + id);
  }
}
