import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  firstName = '';
  fplaceholder = 'First Name';
  lplaceholder = 'Last Name';
  eplaceholder = 'Email';
  lastName = '';
  email = '';
  newUser: User;
  num: number;
  warning = false;
  emailFormat = false;
  err: any;
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UserService) {
    this.userService.makeSubscription().subscribe(res => {
      this.err = res.res;
      // if (this.err === 'Email is not unique!') {
      //   this.email = this.err;
      //   this.emailNotEqual = true;
      // }else
      if (this.err) {
        this.warning = true;
        if (!this.firstName) {
          this.fplaceholder = JSON.parse(this.err).first_name[0];
        }
        if (!this.lastName) {
          this.lplaceholder = JSON.parse(this.err).last_name[0];
      }
        if (!this.email) {
          this.eplaceholder = JSON.parse(this.err).email[0];
        }
      }else {
        console.log("New User Created");
      }
    });
  }

  ngOnInit() {
  }

  checkEmail() {
    const enRegex = /^[0-9a-zA-Z_]{1,}[\@]{1}[0-9a-zA-Z_]{1,}[.]{1}[a-zA-Z]{1,}$/;
    const ee = new RegExp(enRegex);
    return ee.test(this.email);
  }

  reset() {
    this.firstName = this.lastName = this.email = '';
    this.emailFormat = false;
    this.warning = false;
  }

   addNewUser() {
    if (this.email !== '') {
      if (!this.checkEmail()) {
        this.emailFormat = true;
        return;
      }
    }
     this.num = this.userService.getUsers().length;

     this.newUser = { id: this.num + 1, buyer_id: this.num + 1,
       first_name: this.firstName, last_name: this.lastName, email: this.email };
       this.userService.addNewUsers(this.newUser);
       this.addUser.emit('reload');
       this.reset();
       return;
   }
}
