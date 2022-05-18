import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  content: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.content = this.authService.getUser()
    console.log(this.content,"<<<this.contnent from profile")
  }


}
