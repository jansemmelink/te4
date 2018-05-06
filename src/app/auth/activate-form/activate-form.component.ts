import { Component, OnInit } from '@angular/core';
import { Activate } from '../activate';

@Component({
  selector: 'app-activate-form',
  templateUrl: './activate-form.component.html',
  styleUrls: ['./activate-form.component.css']
})
export class ActivateFormComponent implements OnInit {
  model = new Activate("me@host.com","","");
  submitted = false;

  constructor() { }

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
