import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecComponent } from './lec/lec.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { InputComponent } from './share/input/input.component';
import { SelectorComponent } from './share/selector/selector.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './share/submit/submit.component';
import { LearningFormComponent } from './learning-form/learning-form.component';
import { ErrCompComponent } from './err-comp/err-comp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LecComponent,
    GallaryComponent,
    LoginComponent,
    RegComponent,
    InputComponent,
    SelectorComponent,
    HomeComponent,
    SubmitComponent,
    LearningFormComponent,
    ErrCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
