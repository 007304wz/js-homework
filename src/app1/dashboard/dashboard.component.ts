import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ UserService ]
})
export class DashboardComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService) {
   this.users = this.userService.getUsers();
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
