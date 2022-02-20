import { ContactComponent } from './components/contact/contact.component';
import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesModule } from './shared/files/files.module';
import { AlertComponent } from './shared/alert/alert.component';


import {
  AccordionModule,
  CarouselModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  TooltipModule
} from "ngx-bootstrap";

import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ContactComponent,
    FormulaireComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FilesModule,
    MaterialModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
