import { Injectable} from '@angular/core';

import { HttpHeaders,HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError  } from 'rxjs/Operators';
import { User } from '../../models/user.module'
import { IAuth } from 'src/app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string='http://localhost:3000/api';
  headers= new HttpHeaders().set('Content-Type','application/json')
  constructor(
    private httpClient: HttpClient
  ){}
  signup(user:User): Observable<any>{
    return this.httpClient.post(`${this.api_url}/auth/signup`,user).pipe(
      catchError(this.handleError)
      );

    }
    login(user:User):Observable<any>{
    return this.httpClient.post(`${this.api_url}/auth/login`,user).pipe(
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
