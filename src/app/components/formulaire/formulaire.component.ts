import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        tel:[''],
        niv:[''],
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


  // ngOnInit(): void {

  // }

  // formulaire(){

  //     this.userService.create(this.formulairForm.value).subscribe(res => {
  //       if(res.status == 200) {
  //         this.formulairForm.reset();
  //         this.router.navigate(['/profile']);
  //       }
  //     });



  // }
  checked = false;
  indeterminate = false;
  isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);
	thirdFormGroup: FormGroup=Object.create(null);




  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;








  categories: string[] = ['Accessories', 'Apparel', 'Footwear', 'Homewares', 'Audiobooks']
  userForm!: FormGroup;

	// constructor(private formBuilder: FormBuilder) {}

	ngOnInit():void {


    this.personalDetails = this._formBuilder.group({
      name: ['', Validators.required],
      cin: ['', Validators.required],
      datenais: ['', Validators.required],
      tel: ['',Validators.required],
      niv: ['',Validators.required]
  });
  this.addressDetails = this._formBuilder.group({
      etab: ['', Validators.required],
      org: ['', Validators.required],
      typstage: ['',Validators.required],
      sujet: ['',Validators.required]
  });
  this.educationalDetails = this._formBuilder.group({
      highest_qualification: ['', Validators.required],
      university: ['', Validators.required],
      total_marks: ['',Validators.required]
  });

	}


  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  next(){
    if(this.step==1){
          this.personal_step = true;
          if (this.personalDetails.invalid) { return  }
          this.step++
    }
    if(this.step==2){
        this.address_step = true;
        if (this.addressDetails.invalid) { return }
            this.step++;
    }
  }
  previous(){
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.education_step = false;
    }
  }
  submit(){
    if(this.step==3){
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
    }
  }

}
