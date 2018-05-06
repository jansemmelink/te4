import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  /*session_id=localStorage.getItem("session_id");
  loggedIn = false;*/

  constructor() { }

  ngOnInit() {
    /*if (this.session_id) {
      this.loggedIn=true;
    } */
  }
}
