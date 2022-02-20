import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      gender: [''],
      country: [''],
      city: [''],
      // address: [''],
      phone: [''],
      email: [''],
      password: [''],
    });
   }

  ngOnInit(): void {
  }

  signupUser() {
    this.authService.signup(this.registerForm.value).subscribe(res => {
      if(res.status == 201) {
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }
    });
  }

}
