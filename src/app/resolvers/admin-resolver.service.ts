import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../models/user";
import {Observable} from "rxjs";
import { AdminService } from '../admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminResolverService implements Resolve<User[]> {

  constructor(private authService: AdminService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.authService.getSystemUsers();
  }
}
