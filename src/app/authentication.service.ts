// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:5000/api';
//
//   constructor(private http: HttpClient) { }
//
//   register(user: any): Observable<any> {
//     return this.http.post(${this.apiUrl}/register, user); // Fix: Enclose expression in backticks
//   }
//
//   login(credentials: any): Observable<any> {
//     return this.http.post(${this.apiUrl}/login, credentials); // Fix: Enclose expression in backticks
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user); // Corrected: Enclose expression in backticks
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials); // Corrected: Enclose expression in backticks
  }
}
