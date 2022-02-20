
import {Component, OnInit} from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/auth/users.service';

import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPass=false;

  public loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router) {
      this.loginForm = this.formBuilder.group({
        email: [''],
        password: [''],
        })
    }

  ngOnInit(): void {

    // this.isFormInvalid =this._authenticationService.isAuthenticated
    console.log(this.signinUser);
  }



   signinUser() {
      this.authService.login(this.loginForm.value).subscribe(res => {
        if(res.status == 200) {
          this.loginForm.reset();
          this.router.navigate(['/formulaire']);
        }
    });

  }


}








