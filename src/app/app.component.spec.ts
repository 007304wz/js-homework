import { TestBed, async } from '@angular/core/testing';


import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';

import { APP_BASE_HREF } from '@angular/common';



import { AppComponent } from './app.component';
import {CreateUserFormComponent} from "./dashboard/create-user-form/create-user-form.component";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
      declarations: [
        AppComponent, DashboardComponent, UserInfoComponent, LogoutComponent, UserDetailComponent, CreateUserFormComponent
      ],
      imports: [ AppRoutingModule, FormsModule, MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have title Vulcan in span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Vulcan');
  }));
});
