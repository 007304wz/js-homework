import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  newUser: User;
  num: number;
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  // addUser() {
  //
  //   this.num = this.userService.getUsers().length;
  //
  //   this.newUser = { id: this.num + 1, buyer_id: this.num + 1,
  //     first_name: this.firstName, last_name: this.lastName, email: this.email };
  //
  //   if (this.firstName && this.lastName && this.email) {
  //     this.userService.addUser(this.newUser);
  //     console.log(this.newUser);
  //   }else {
  //     console.log('required more info!');
  //   }
  //  }

   addNewUser() {
     this.num = this.userService.getUsers().length;

     this.newUser = { id: this.num + 1, buyer_id: this.num + 1,
       first_name: this.firstName, last_name: this.lastName, email: this.email };

     if (this.firstName && this.lastName && this.email) {
       this.userService.addNewUsers(this.newUser);
       this.addUser.emit('reload');
     }else {
       console.log('required more info!');
     }
   }
}
