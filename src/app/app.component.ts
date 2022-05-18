import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  options: FormGroup;
  isLoggedin = false
  username?: string;

constructor(fb: FormBuilder,
              public authService: AuthService,
              private router: Router) {
    this.options = fb.group({
      bottom:0,
      fixed: false,
      top: 0,
    });
  }

  ngOnInit(): void {
     this.isLoggedin = this.authService.isLoggedIn()
    console.log(this.isLoggedin,"<<<<isloggedin from app")
    if (this.isLoggedin) {
      const user = this.authService.getUser();
      console.log(user,"user!!")

      this.username = user.username;
    } 
  }
  /* isLoggedIn(){
    this.isLoggedin = this.authService.isLoggedIn()
    console.log(this.isLoggedin,"<<<<isloggedin from app")

  } */

  
  logout(): void {
    this.authService.logout()
    this.router.navigateByUrl('/home')
        .then(()=>{
          window.location.reload();
        })
  }

  

}
