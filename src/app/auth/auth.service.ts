import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

const AUTH_API = 'https://jwt.teamkinetic.co.uk/users';

const TOKEN_KEY = 'access_token';

const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  constructor(private http: HttpClient) { }

public register(email:string, password:string) {
    return this.http.post<{token: string}>(AUTH_API + '/register',
     {email, password}, httpOptions)
     
}

public login(username: string, password: string) {
    return this.http.post<{token: string}>(AUTH_API + '/authenticate', 
    {username, password}, httpOptions)
    
}

public get isLoggedIn(): boolean{
    return localStorage.getItem(TOKEN_KEY) !==  null;
}

public logout() {
    localStorage.removeItem(TOKEN_KEY);
  
}

public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string | null {
    let gettoken = window.localStorage.getItem(TOKEN_KEY);
    console.log(gettoken,"<<<<<gettoken")
    return gettoken
}

public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

public getUser(): any {
  const user = window.localStorage.getItem(USER_KEY);
  console.log(user,"user!!")
  if (user) {
    return JSON.parse(user);
  }
  return {};
}


}
