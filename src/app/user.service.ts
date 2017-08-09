import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

import { User } from './user';



@Injectable()
export class UserService {

  users: User[] = [];

  private serverResponse = '{ "email": [ "Hi! Email can\'t be blank !" ], "first_name": [ "Hi, I am from fake API :(" ], "last_name": [ "Hi, I am from Service !" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  private subject = new Subject<any>();
  constructor() {
  }
  makeSubscription() {
    return this.subject.asObservable();
  }

  addNewUsers(user: User) {

    if (user.first_name !== '' && user.last_name !== '' && user.email !== '') {
      this.users = this.getUsers();
      this.userDictionary[user.id] = JSON.stringify(user);
      this.subject.next({});
    }else {
      this.subject.next({res: this.serverResponse});
    }
  }
  response() {
    return "this is error";
  }

  getUsers() {
    return JSON.parse( "[" + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + "]");
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
