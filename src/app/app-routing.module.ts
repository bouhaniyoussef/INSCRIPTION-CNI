import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path: 'login', component: LoginComponent},
  {path: 'register', component:RegisterComponent },
  {path: 'form', component:FormulaireComponent },

  {path: "notFoundResource/:status", component: ResourceNotFoundComponent},
  {path: "applicationError/:status", component: ApplicationErrorComponent},

  {
    path: '**', // unknown path
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[
    HomeComponent,

    PageNotFoundComponent,
    ApplicationErrorComponent,
    ResourceNotFoundComponent
  ]
})
export class AppRoutingModule { }
