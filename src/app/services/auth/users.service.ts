import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/models/users.module';
// import { IUsers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _apiUrl: string ="http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<Users[]> {
    return this.httpClient.get<Users[]>(this._apiUrl);
  }
  addUser(u: Users):Observable<Users> {
    return this.httpClient.post<Users>(this._apiUrl, u);
  }

}
