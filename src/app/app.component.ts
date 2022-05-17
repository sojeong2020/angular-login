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

  isLoggedIn = false;
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
    this.isLoggedIn = !!this.authService.getToken();
    if (this.isLoggedIn) {
      const user = this.authService.getUser();
      this.username = user.username;
    }
  }

  
  logout(): void {
    this.authService.logout()
    this.router.navigateByUrl('/home')
        .then(()=>{
          window.location.reload();
        })
  }

  

}
