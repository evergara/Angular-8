import { Component, OnInit } from '@angular/core';
import { User } from '@feature/user/model/user';
import { UsersService } from '@feature/user/service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { 
    this.users = [];
  }


  ngOnInit(): void {
    this.userList();
  }

  userList(): void {
     this.users = this.userService.getAllUser();
  }

  userEventClic(eventMessage: string): void {
    console.log(eventMessage);
  }
}
