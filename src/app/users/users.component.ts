import { Component, OnInit } from '@angular/core';
import { DataService } from '../auth/data.service';
//import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  content? : any;

  constructor(private dataService: DataService) {

    this.dataService.fetchUsers().subscribe( result=>{
      console.log(result,"<<<<result of users!!!")
      this.content = result
    }) 
   }

  ngOnInit() {
       
  }

}
