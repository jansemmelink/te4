import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { ActivateFormComponent } from './auth/activate-form/activate-form.component';
import { LoginFormComponent    } from './auth/login-form/login-form.component';

import { HomeComponent    } from './app/home/home.component';
import { PersonProfileComponent    } from './app/person/person-profile/person-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/register', pathMatch: 'full'},
  { path: 'auth/register', component: RegisterFormComponent },
  { path: 'auth/activate', component: ActivateFormComponent },
  { path: 'auth/login',    component: LoginFormComponent },

  { path: 'home',    component: HomeComponent },
  { path: 'person/profile', component: PersonProfileComponent},
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
