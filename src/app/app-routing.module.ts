import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { ProfileResolverService } from './resolvers/profile-resolver.service';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService
    },
    canActivate: [UserAuthGuard]
  },
  {
    path: 'orders',
    component: OrderComponent,
    canActivate: [UserAuthGuard]

  },

  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },



  {path: "notFoundResource/:status", component: ResourceNotFoundComponent},
  {path: "applicationError/:status", component: ApplicationErrorComponent},
  {
    path: 'admin', // this is the prefix route
    canActivate: [AdminAuthGuard],
    // lazy loading: this module will not loaded only if the the user navigate into it
    loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule)
  },
  {
    path: '**', // unknown path
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
