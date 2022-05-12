import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'vol/login', component: LoginComponent  },
    { path: 'vol/register', component: RegisterComponent },
    { path: 'vol/dashboard', component: DashboardComponent },
    { path: 'vol/calendar', component: CalendarComponent  },
    { path: 'vol/event', component: EventComponent },
    { path: 'vol/profile', component: ProfileComponent  },
    { path: 'vol/users', component: UsersComponent  },
    { path: 'vol/users/:id', component: SingleUserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }