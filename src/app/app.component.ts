import { Component } from '@angular/core';
import { UsersService } from './services/auth/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INSCRIPTION-CNI';
  constructor(public _authenticationService:UsersService) { }

  ngOnInit(): void {
  }
  logout() {
    this._authenticationService.logout();
  }
}
