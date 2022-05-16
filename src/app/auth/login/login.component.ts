import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }
    this.authService
    .login(this.form.get('username')?.value, this.form.get('password')?.value)    
    .subscribe({
      next: data => {
        this.authService.saveToken(data.token);
        this.authService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //navigate to route and refresh (reload and redirect!!)
        this.router.navigateByUrl('/vol/dashboard')
        .then(()=>{
          window.location.reload();
        })
      },
      error: err => {
        this.isLoginFailed = true;
      }
    });
  }
  
}
