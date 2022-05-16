import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'vol/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'vol/calendar', component: CalendarComponent, canActivate: [AuthGuard]  },
    { path: 'vol/event', component: EventComponent, canActivate: [AuthGuard] },
    { path: 'vol/profile', component: ProfileComponent, canActivate: [AuthGuard]  },
    { path: 'vol/users', component: UsersComponent, canActivate: [AuthGuard]  },
    { path: 'vol/users/:id', component: SingleUserComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'about', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }