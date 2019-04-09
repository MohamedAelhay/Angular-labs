import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { LearningFormComponent } from './learning-form/learning-form.component';
import { ErrCompComponent } from './err-comp/err-comp.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'reg', component: RegComponent},
  {path:'home', component: GallaryComponent},
  {path:'lf', component: LearningFormComponent},
  {path:'**', component: ErrCompComponent},
  // ** -> means if the route doesnt exist will route on ErrCompComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
