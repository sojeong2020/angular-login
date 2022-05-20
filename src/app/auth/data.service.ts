import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'https://jwt.teamkinetic.co.uk/users';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  
  fetchUsers(): Observable<any>{
    return this.http.get(AUTH_API);
  }
}
