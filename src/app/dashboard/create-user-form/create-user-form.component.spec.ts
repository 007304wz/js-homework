import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserFormComponent } from './create-user-form.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "../../user.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

describe('CreateUserFormComponent', () => {
  let component: CreateUserFormComponent;
  let fixture: ComponentFixture<CreateUserFormComponent>;
  let fakeUserService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserFormComponent ],
      imports: [ FormsModule ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fakeUserService = jasmine.createSpyObj(fakeUserService, ['makeSubscription']);
    fakeUserService.makeSubscription.and.returnValue(Observable.of({res: '{ "email": [ " no blank " ], "first_name": [ " :) " ], "last_name": [ "fill fill fill" ] }'}));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger warning', () => {
    component = new CreateUserFormComponent(fakeUserService);
    expect(component.warning).toEqual(true);
  })
});
