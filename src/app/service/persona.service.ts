import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/persona/'
  URL = 'https://backend-portfolio-3o0v.onrender.com/persona/'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + 'detail/' + id);
  }

  public save(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }

  public update(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + 'update/' + id, persona);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + 'delete/' + id);
  }
}
