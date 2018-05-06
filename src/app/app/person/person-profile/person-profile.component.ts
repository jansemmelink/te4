import { Component, OnInit } from '@angular/core';
import { Person } from '../../../auth/person';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})

export class PersonProfileComponent implements OnInit {
  model = new Person("MyName", "MySurname");
  editing = false;
  submitted = false;
  errorMessage = "";

  constructor() { }

  ngOnInit() {
  }
}
