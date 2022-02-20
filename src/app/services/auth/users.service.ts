import { catchError } from 'rxjs/Operators';
import { IAuth } from '../../models/auth';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { User } from 'src/app/models/user.module';
import { Router } from '@angular/router';
import { Stager } from '../../models/stager.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isAuthenticated = false;
  isNotAuthenticated = true;
  private _apiUrl: string ="http://localhost:3000/api";
  headers= new HttpHeaders().set('Content-Type','application/json')
  constructor(private httpClient: HttpClient
   ,private router: Router) { }

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this._apiUrl);
  }
  addUser(u: User):Observable<User> {
    return this.httpClient.post<User>(this._apiUrl, u);
  }
  authenticate(user:IAuth): Observable<boolean>{
    let bool:any;
    this.getUsers().subscribe(data => {
      if (data.some(u=>u.email===user.email&&u.password===user.password)) {
        this.isAuthenticated=true;
        this.isAuthenticated=false;
        this.router.navigate(['home']);
        bool=true;
      } else {
        this.isAuthenticated=false;
        this.isAuthenticated=true;
        bool=false;
      }
    });
    return bool;
  }
  logout() {
    this.isAuthenticated = false;
    this.isNotAuthenticated = true;
    this.router.navigate(['']);
  }

  create(stager:Stager): Observable<any>{
    return this.httpClient.post(`${this._apiUrl}/stagers/`,stager).pipe(
      catchError(this.handleError)
    );



  }


 handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      //? client-side error
      msg = error.error.message;
    } else {
      //? server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
