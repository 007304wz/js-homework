import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/user.service';
import { User } from '../../app/user';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css'],
  providers: [UserService]
})
export class CreateUserFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  users2: User[];
  newUser: User;
  num: number;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  addUser() {

    this.num = this.userService.getUsers().length;

    this.newUser = { id: this.num + 1, buyer_id: this.num + 1,
      first_name: this.firstName, last_name: this.lastName, email: this.email };

    if (this.firstName && this.lastName && this.email) {
      this.userService.addNewUser(this.newUser);
      console.log(this.newUser);
    }else {
      console.log('required more info!');
    }
   }
}
