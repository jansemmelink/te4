import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  model = new Login("me@host.com", "");
  submitted = false;
  loggedin = false;
  errorMessage = "";

  constructor(
    private router: Router,
    private loginService:LoginService) { }

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    localStorage.removeItem('session');
    localStorage.removeItem('session_id');
    localStorage.removeItem("user_id");
  }

  login():void {
    this.loginService.loginUser(this.model)
      .subscribe(
        data => { this.loggedin=true;
          localStorage.setItem('session', JSON.stringify(data));
          localStorage.setItem("session_id", data.id);
          localStorage.setItem("user_id", data.user_id);
          this.router.navigate(["/home"]);
        },
        err => { this.errorMessage = "Failed to login: " + err.StatusCode/*this is undefined...???*/})
  }  
}
