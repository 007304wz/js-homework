import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

import { User } from './user';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { NEW_USERS, NewState } from './init-state';


@Injectable()
export class UserService {

  // users: User[] = [];

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };
   // private currentUser = (JSON.parse( "[" + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + "]"));

  private subject = new BehaviorSubject<NewState>(NEW_USERS);

  constructor() {
    // this.currentUser = (JSON.parse( "[" + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + "]"));
    // console.log(this.currentUser);
  }
  // getNewUsers(): Observable<User[]> {
  //   return this.subject.pluck('users');
  // }
  addNewUsers(user: User) {
    // const {users} = this.subject.getValue();
    // this.subject.next({
    //   users: [ ...users, {
    //     id: user.id,
    //     buyer_id: user.buyer_id,
    //     first_name: user.first_name,
    //     last_name: user.last_name,
    //     email: user.email}]
    // });
    // console.log('test');
    // console.log(this.subject.pluck('destination'));
    this.userDictionary[user.id] = JSON.stringify(user);
    console.log(user.id);
  }
  getUsers() {
    return JSON.parse( "[" + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + "]");
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  addUser(user: User) {
    this.userDictionary[user.id] = JSON.stringify(user);

  }

  private logError(error: any) {
    console.error('service found an error: '+error);
  }

}
