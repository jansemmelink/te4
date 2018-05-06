import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { ActivateFormComponent } from './auth/activate-form/activate-form.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';

import { RegisterService } from './auth/register.service';
import { ActivateService } from './auth/activate.service';
import { LoginService } from './auth/login.service';

import { HomeComponent } from './app/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { PersonProfileComponent } from './app/person/person-profile/person-profile.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ActivateFormComponent,
    LoginFormComponent,
    HomeComponent,
    PersonProfileComponent
  ],
  providers: [
    RegisterService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
