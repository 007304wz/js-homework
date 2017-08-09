import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { UserDetailComponent } from './detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import {CreateUserFormComponent} from "../dashboard/create-user-form/create-user-form.component";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs/Observable";


describe('UserDetailComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [
         DashboardComponent, UserInfoComponent, LogoutComponent, UserDetailComponent, CreateUserFormComponent
      ],
      imports: [ AppRoutingModule, FormsModule, MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule ],
    }).compileComponents();
  }));

  it('should create the DetailComponent', async(() => {
    const fixture = TestBed.createComponent(UserDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
