import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {

  users: User[] = [];
  change: EventEmitter<number>;

  private serverResponse = '{ "email": [ "can\'t be blank" ], "first_name": [ "can\'t be blank" ], "last_name": [ "can\'t be blank" ] }';
  private userDictionary = {
    1: '{ "id": 1, "buyer_id": 1, "first_name": "Fred", "last_name": "Flintstone", "email": "fred.flintstone@slaterockandgravel.com" }',
    2: '{ "id": 2, "buyer_id": 2, "first_name": "Barney", "last_name": "Rubble", "email": "barney.rubble@slaterockandgravel.com" }',
    3: '{ "id": 3, "buyer_id": 3, "first_name": "Wilma", "last_name": "Flintstone", "email": "wilma.flinstone@dailygranite.com" }'
  };

  constructor() {
    this.change = new EventEmitter;
  }


  getUsers(): Observable<User[]> {
   return JSON.parse( '[' + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + ']' );
  }
  getUsers2() {
    return JSON.parse( '[' + Object.keys(this.userDictionary).map(key => this.userDictionary[key]).join(',') + ']' );
  }

  getUser(id: number) {
    return JSON.parse(this.userDictionary[id]);
  }

  addUser(user: User) {
    console.log('service received:' + user);
    this.userDictionary[user.id] = JSON.stringify(user);
  }

  private logError(error: any) {
    console.error('service found an error: '+error);
  }
}
