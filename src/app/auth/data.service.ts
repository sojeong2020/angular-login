import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'; //JWT Helper
import { tap } from 'rxjs/operators'; 


const API_URL = 'https://jwt.teamkinetic.co.uk/users';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
    private jwtHelper:JwtHelperService
    
    ) { }

  
  fetchUsers(): Observable<any>{
    return this.http.get( API_URL);
  }
}
