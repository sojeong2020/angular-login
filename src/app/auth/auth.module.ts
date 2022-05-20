import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AuthService } from './auth.service';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { HttpClientModule } from '@angular/common/http';
//import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent  }
    ]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,

   /*  HttpClientModule,
     JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token');},
        allowedDomains: ["jwt.teamkinetic.co.uk"],
        disallowedRoutes: ["jwt.teamkinetic.co.uk/examplebadroute/"],
        headerName: "Authorization",
        authScheme: "Bearer ",
        //throwNoTokenError: true,
        //skipWhenExpired: true,

      },
    }),    */

  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AuthModule { }
