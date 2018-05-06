import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})


export class RegisterFormComponent implements OnInit {
  model = new Register("me@host.com"/*, "http://localhost:4000/auth/activate"*/);
  submitted = false;
  registered = false;
  errorMessage = "";

  constructor(
    private registerService:RegisterService) { }

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

  register():void {
    this.registerService.registerUser(this.model)
      .subscribe(
        data => { this.registered=true; },
        err => { this.errorMessage = "Failed to register: " + err.StatusCode/*this is undefined...???*/})
  }  
}
