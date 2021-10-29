import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: String = '';
  password1: String = '';
  password2: String = '';
  fname: String = '';
  lname: String = '';
  age?: Number;
  height?: Number;
  weight?: Number;
  activity_level?: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
