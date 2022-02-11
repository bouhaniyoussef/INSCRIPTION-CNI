import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public authService: AuthService) {
    // this.authService.refreshInfo();
  }

  ngOnInit(): void {

  }



}
