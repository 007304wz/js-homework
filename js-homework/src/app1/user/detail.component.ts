import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ UserService ]
})
export class UserDetailComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.user = this.userService.getUser(id);
  }

}
