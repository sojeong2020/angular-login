import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const  API_URL = 'https://jwt.teamkinetic.co.uk/users';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  
  fetchUsers(): Observable<any>{
    return this.http.get( API_URL);
  }

  fetchUser(id: any):Observable<any>{
    return this.http.get( API_URL + `/${id}`);
  }
}
