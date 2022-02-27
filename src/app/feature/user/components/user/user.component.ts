import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@feature/user/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   //@ts-ignore
  @Input() user: User;
  @Output() userEventClic: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickedUser(): void {
    this.userEventClic.emit(`clicked al usario ${this.user.name}`);
  }
}
