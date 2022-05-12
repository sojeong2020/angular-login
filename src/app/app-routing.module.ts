import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'vol/login', component: LoginComponent  },
    { path: 'vol/register', component: RegisterComponent },
    { path: 'vol/dashboard', component: DashboardComponent },
    { path: 'vol/profile', component: ProfileComponent  },
    { path: 'vol/users', component: UsersComponent  },
    { path: 'vol/user', component: SingleUserComponent },
    //{ path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }