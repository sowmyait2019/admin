import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUserAdded = new EventEmitter<any>();

  constructor(private http:HttpClient) { }
  getusers(){
    return this.http.get("http://localhost:5000/api/contacts")
  }
}
