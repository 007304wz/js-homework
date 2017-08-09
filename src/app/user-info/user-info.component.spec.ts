import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { UserDetailComponent } from '../user/detail.component';
import { CreateUserFormComponent } from '../dashboard/create-user-form/create-user-form.component';

import { UserInfoComponent } from './user-info.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      providers: [ ],
      declarations: [ UserInfoComponent, DashboardComponent, LogoutComponent, UserDetailComponent, CreateUserFormComponent ],
      imports: [ FormsModule, MaterialModule, MdToolbarModule, MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, RouterModule, AppRoutingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


