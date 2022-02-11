import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INSCRIPTION-CNI';
  constructor(public authService: AuthService) {
    // authService.prepareUserData();
    // authService.refreshInfo();
}


ngOnInit(): void {
  // this.authService.refreshInfo();

}
}
