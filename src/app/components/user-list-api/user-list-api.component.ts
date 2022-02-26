
import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/services/users-api.service';
import { UserRandom } from './../../model/userrandom';

@Component({
  selector: 'app-user-list-api',
  templateUrl: './user-list-api.component.html',
  styleUrls: ['./user-list-api.component.scss']
})
export class UserListApiComponent implements OnInit {
  
  users: UserRandom[];

  constructor(private userService: UsersApiService) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAllUser().subscribe( users => {
      this.users = users;
    });
    
  }

  userEventClicked(eventMessage: string): void {
    console.log(eventMessage);
  }

}
