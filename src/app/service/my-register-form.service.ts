import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyRegisterFormService {

  public latestData = new Subject();

  private url: string = 'https://reqres.in'

  constructor(private http: HttpClient) {
  }

  login(body: { email: string, password: string, repeatPassword: string, }) {
    let loginURL = this.url + '/api/login'
    return this.http.post(loginURL, body).pipe(tap(d => this.latestData.next(d)))
  }
}
