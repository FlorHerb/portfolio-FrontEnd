import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL = 'http://localhost:8080/skill/'
  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillURL + 'lista');
  }

  public detail(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillURL + 'detail/' + id);
  }

  public save(Skill: Skill):Observable<any>{
    return this.httpClient.post<any>(this.skillURL + 'create', Skill);
  }

  public update(id: number, Skill:Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillURL + 'update/' + id, Skill);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.skillURL + 'delete/' + id);
  }

}
