import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../auth/data.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  singleUser: any;

  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute) { 

                 let id = this.activatedRoute.snapshot.paramMap.get('id');
                console.log(id,"id!!")

                 this.dataService.fetchUser(id).subscribe((result)=>{
                  console.log(result,"<<<<single user result!")
                  this.singleUser = result;
                })  
              }

  ngOnInit(): void {}
 
}

/* There are 2 ways of accessing the params. 

- The first one is using activatedRoute.snapshot.paramMap 

  If you intend not to update your URL parameter within the same component you are accessing it, then you can use the snapshot.
  As the name suggests, the parameter would only be accessed once, when the component loads.

- The second is through the activatedRoute.paramMap.subscribe.

  If you intend to update the URL parameter within the same component, then you have to use a subscription.

*/