import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  newUser: User;
  num: number;
  cannotCommit = true;
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  checkName() {
    let len1 = this.firstName.length;
    let len2 = this.lastName.length;
    if(len1<30 && len1>2 && len2<30 && len2>2) {
      return true;
    }else {
      return false;
    }
  }
  checkEmail() {
    const enRegex = /^[0-9a-zA-Z_]{1,}[\@]{1}[0-9a-zA-Z_]{1,}[.]{1}[a-zA-Z]{1,}$/;
    const ee = new RegExp(enRegex);
    return ee.test(this.email);
  }
  checkInfoValid() {
    console.log(this.checkName());
    console.log(this.checkEmail());
    //console.log(this.checkName() && this.checkEmail());
    if(this.checkName() && this.checkEmail()) {
      this.cannotCommit = false;
    }else {
      this.cannotCommit = true;
    }
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
