import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signin(user: { email: string, password: string, confirmPassword: string }): Observable<any> {
    return this.http.post<any>(` http://localhost:3000/signin`, user)
  }
  signup(user: { email: string, password: string, confirmPassword: string }): Observable<any> {
    return this.http.post<any>(` http://localhost:3000/signup`, user)
  }
}
