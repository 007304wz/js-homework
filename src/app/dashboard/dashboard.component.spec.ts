import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { LogoutComponent } from '../account/logout.component';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../user/detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CreateUserFormComponent} from "./create-user-form/create-user-form.component";


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, LogoutComponent, UserDetailComponent, CreateUserFormComponent ],
      imports: [ FormsModule, RouterModule, AppRoutingModule, MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule ],
      providers: [ UserService, {provide: APP_BASE_HREF, useValue: '/'} ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 Initial users', () => {
    expect(component.users.length).toEqual(3);
  });
});
