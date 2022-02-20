import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/auth/users.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formulairForm: FormGroup;
  pay=false;

  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  isEditable = false;
  constructor(public formBuilder: FormBuilder,
    public authService: AuthService,
    public userService: UsersService,
    public router: Router,
    private _formBuilder: FormBuilder) {
      this.formulairForm=this.formBuilder.group({

        nom:[''],
        cin:[''],
        datenais:[''],
        niv:[''],
        tel:[''],
        etab:[''],
        org:[''],
        typstage:[''],
        sujet:[''],
        datedeb:[''],
        datefin:[''],
        pay:[''],
        mont:[''],
      })
     }

  ngOnInit(): void {

  }

  formulaire(){

      this.userService.create(this.formulairForm.value).subscribe(res => {
        if(res.status == 200) {
          this.formulairForm.reset();
          this.router.navigate(['/profile']);
        }
      });



  }



}
