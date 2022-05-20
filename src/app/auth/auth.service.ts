import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
//import * as moment from 'moment'; //time management

const AUTH_API = 'https://jwt.teamkinetic.co.uk/users';

class DecodedToken {
  'exp': number;
  'iat': number;
  'nbf': number;
  'id': string;
}  

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  helper = new JwtHelperService();

  private TOKEN_KEY = 'access_token';
  private USER_KEY = 'auth-user';
  private AUTH_META = 'auth-meta';

   decodedToken: any

constructor(private http: HttpClient) {

  this.decodedToken = JSON.parse(localStorage.getItem(this.AUTH_META)!) || new DecodedToken();

 }

public register(email:string) {
    return this.http.post<{token: string}>(AUTH_API + '/register',
     {email})
}

public login(username: string, password: string) {
    return this.http.post<{token: string}>(AUTH_API + '/authenticate', 
    {username, password})
    .pipe(tap(res=> this.saveToken(res['token'])))
}

public saveToken(token: string): any {

   this.decodedToken = this.helper.decodeToken(token);

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

  if (user) {
   return JSON.parse(user);
  }
  return {};
}

public logout() {
  localStorage.removeItem(this.TOKEN_KEY);
  localStorage.removeItem(this.USER_KEY);
  localStorage.removeItem(this.AUTH_META);

 this.decodedToken = new DecodedToken();
}

public isLoggedIn(): boolean{

  const token: string | null = localStorage.getItem(this.TOKEN_KEY);
  
  if (token && !this.helper.isTokenExpired(token)) {

 return true;
  }
  else {
    return false;
  }
}
  // first done- return localStorage.getItem(this.TOKEN_KEY) !==  null;

  /* second done - moment() library is used - console.log(this.decodedToken.exp,"<<<<this.decodedtoken exp!!")
  return moment().isBefore(moment.unix(this.decodedToken.exp));  */
  
  fetchUsers(): Observable<any>{
    return this.http.get(AUTH_API);
  }

  
}






