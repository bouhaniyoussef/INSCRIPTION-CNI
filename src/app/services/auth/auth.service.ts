import { Users } from './../../models/users.module';
import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  isNotAuthenticated = true;
  utilisateurEnCours: any = {};
  public currentUser: Users;
  errorsHandler = new ErrorHandler();
  public  API_URL: string = 'http://localhost:3000/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private _usersService: UsersService,private http: HttpClient
  ) { }

  signup(user:Users) :Observable<any>{

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
        catchError(this.handleError)
    )

  }

  // messageContact(messageForm: any): Observable<void> {
  //   try {
  //     return this.http.post<void>(this.contactUrl, messageForm);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  login(user: any): Observable<any> {
    try {
      return this.http.post<any>(this.API_URL, user);
    } catch (err) {
      this.errorsHandler.handleError(err);
    }
  }

  // prepareUserData() {
  //   if (this.isLoggedIn()) {
  //     this.getCurrentUser().subscribe(resUser => {
  //       this.currentUser = resUser;
  //     });
  //     this.pUserData().subscribe(uData => {
  //       this.profile = uData.profile;
  //       this.username = `${uData.profile.firstname}
  //       ${uData.profile.lastname}`;
  //     });
  //   }
  // }
  // refreshInfo() {
  //   if (this.isLoggedIn()) {
  //     this.pUserData().subscribe(uData => {
  //       this.profile = uData.profile;
  //       this.cart = uData.cart;
  //       this.cartItem = uData.cartItem;
  //     });
  //   }
  // }
  // getCurrentUser(): Observable<User> {
  //   try {
  //     return this.http.get<User>(`${this._userUrl}`);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }

  // authenticate(): Observable<boolean> {
  //   let bool: any;
  //   this._usersService.getUsers().subscribe(data => {
  //     if (data.some(u => u.email === signInData.email && u.password === signInData.password)) {
  //       this.isAuthenticated = true;
  //       this.isNotAuthenticated = false;
  //       this.setUtilisateurEnCours(signInData);
  //       this.router.navigate(['home']);
  //       bool = true;
  //     } else {
  //       this.isAuthenticated = false;
  //       this.isNotAuthenticated = true;
  //       bool = false;
  //     }
  //   });
  //   return bool;
  // }
  // setUtilisateurEnCours(){
  //   this._usersService.getUsers().subscribe(data => {
  //     this.utilisateurEnCours = data.find(u => u.email === signInData.email && u.password === signInData.password);
  //   });
  // }




  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
  userLogout() {
    this.router.navigate(["/auth/login"]);
    return localStorage.removeItem("token");
  }

  // pUserData(): Observable<UserData> {
  //   try {
  //     return this.http.get<UserData>(this._userDataURL);
  //   } catch (err) {
  //     this.errorsHandler.handleError(err);
  //   }
  // }
}
