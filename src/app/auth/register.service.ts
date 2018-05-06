import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { Register } from './register';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {
  private Url = 'http://localhost:3005/auth/register';

  constructor(
    private http: HttpClient) { }

  /** POST: register a new user */
  registerUser (register: Register): Observable<Register> {
    return this.http.post<Register>(this.Url, register, httpOptions)
  }
}
