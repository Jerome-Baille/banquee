import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CompareCardsComponent } from './compare-cards/compare-cards.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'compare-cards',
    component: CompareCardsComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
