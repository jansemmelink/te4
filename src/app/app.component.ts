import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  session_id=localStorage.getItem("session_id");
  loggedIn = false;

  ngOnInit() {
    if (this.session_id) {
      this.loggedIn=true;
    } 
  }
}
