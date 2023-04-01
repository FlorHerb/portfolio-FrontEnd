import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = ""
  constructor(private http: HttpClient) { }

  sendEmail(input: any) {
    return this.http.post(this.url, input, { responseType: 'text' }).pipe(
      map(
        (response) => {
          if (response) {
            return response
          } else return ""
        },
        (error: any) => {
          return error
        }
      )
    )
  }
}
