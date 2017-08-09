import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


// Material Design
import { MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';
import {CreateUserFormComponent} from "./dashboard/create-user-form/create-user-form.component";
import {UserService} from "../app/user.service";
import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserInfoComponent,
    LogoutComponent,
    UserDetailComponent,
    CreateUserFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    NoopAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
