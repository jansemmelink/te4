import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';
import { Session } from './session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  private Url = 'http://localhost:3005/auth/login';

  constructor(
    private http: HttpClient) { }

  /** POST: login */
  loginUser (user: User): Observable<Session> {
    return this.http.post<Session>(this.Url, user, httpOptions)
  }

  logout():void {
    this.http.get("http://localhost:3005/auth/logout?session_id=123")
    localStorage.remove('session');
    localStorage.remove("session_id");
    localStorage.remove("user_id");
  }


/*from another example:
  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
}
*/
}
