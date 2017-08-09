import {AfterViewInit, Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // newUsers: Observable<User[]>;
  users: User[];
  constructor(private userService: UserService) {
    // this.newUsers = this.userService.getNewUsers();
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }
  reloadUser() {
    this.users = this.userService.getUsers();
  }
  onEdit(){
    window.scrollTo(0,0);
  }

}
