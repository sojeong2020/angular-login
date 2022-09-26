import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  ping() {
    this.http.get("https://jwt.spark.co.uk/users").subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }

}
