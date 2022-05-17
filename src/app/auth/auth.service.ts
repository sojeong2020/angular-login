import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment'; //time management

const AUTH_API = 'https://jwt.teamkinetic.co.uk/users';

const jwt = new JwtHelperService();

/* class DecodedToken {
  'exp': number;
  'iat': number;
  'nbf': number;
  'id': string;
} */

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  private TOKEN_KEY = 'access_token';
  private USER_KEY = 'auth-user';
  private AUTH_META = 'auth-meta';

  private decodedToken: any

constructor(private http: HttpClient) { }

public register(email:string) {
    return this.http.post<{token: string}>(AUTH_API + '/register',
     {email})
     
}

public login(username: string, password: string) { 
    return this.http.post<{token: string}>(AUTH_API + '/authenticate', 
    {username, password})
    .pipe(tap(res=> this.saveToken(res['token'])))
    

}

public get isLoggedIn(): boolean{
    return localStorage.getItem(this.TOKEN_KEY) !==  null;
}

public logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.AUTH_META);

   // this.decodedToken = new DecodedToken();
}

public saveToken(token: string): any {

   this.decodedToken = jwt.decodeToken(token);

    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);

    localStorage.removeItem(this.AUTH_META);
    localStorage.setItem(this.AUTH_META, JSON.stringify(this.decodedToken));
   
    return token;
}

public getToken(): string | null {
    let gettoken = window.localStorage.getItem(this.TOKEN_KEY);
    console.log(gettoken,"<<<<<gettoken")

    return gettoken
}

public saveUser(user: any): void {
    window.localStorage.removeItem(this.USER_KEY);
    window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
}

public getUser(): any {
  const user = window.localStorage.getItem(this.USER_KEY);
  console.log(user,"user!!")
  if (user) {
    return JSON.parse(user);
  }
  return {};
}

fetchUsers(): Observable<any>{
  return this.http.get(AUTH_API)
}


}
