import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    ProfileComponent,
    UsersComponent,
    SingleUserComponent,
    CalendarComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    AuthModule,
   /*  JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
          return     localStorage.getItem('access_token');},
        allowedDomains: ["https://jwt.teamkinetic.co.uk/users"],
        disallowedRoutes: ["https://jwt.teamkinetic.co.uk/examplebadroute/"],
        headerName: "Authorization",
        authScheme: "Bearer ",
        throwNoTokenError: true,
        skipWhenExpired: true,

      },
    }), */

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
