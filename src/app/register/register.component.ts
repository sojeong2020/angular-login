import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }

}
}
