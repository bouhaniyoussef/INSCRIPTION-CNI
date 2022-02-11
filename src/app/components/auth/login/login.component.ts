
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';

import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  areCredentialsInvalid =false;
  showPass = true;
  authCredentialsDto: FormGroup;
  modalRef: BsModalRef;

  // @ViewChild('invalidCredentials', {static: true}) invCredentials: TemplateRef<any>;

  constructor(
    private _authenticationService: AuthService ,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService,
    private modalService: BsModalService) {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/home']);
      }
     }

  ngOnInit(): void {
    this.areCredentialsInvalid=false;
    this.authCredentialsDto = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    // this.isFormInvalid =this._authenticationService.isAuthenticated
    // console.log(this.areCredentialsInvalid);
  }
  onSubmit(loginForm: NgForm){
    // this.isFormInvalid = true;
    if (!loginForm.form.valid) {
      this.areCredentialsInvalid = false;
      return;
    }
    // this.che:ckCredentials(loginForm);
  }
  userLogin() {
    this.authService.login(this.authCredentialsDto.value).subscribe(
      res => {
        localStorage.setItem("token", res.accessToken);
        // this.authService.prepareUserData();
        this.router.navigate([`/home`]);
      },
      error => {
        this.alertService.error(error);
        this.openModal(this.invCredentials);
      }
    );
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  hide(): void {
    this.modalRef.hide();
  }
}
