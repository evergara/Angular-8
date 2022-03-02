import { Component, OnInit, Input } from '@angular/core';
import { UserRandom } from '../../model/userrandom';

@Component({
  selector: 'app-user-detail-api',
  templateUrl: './user-detail-api.component.html',
  styleUrls: ['./user-detail-api.component.scss']
})
export class UserDetailApiComponent implements OnInit {
  //@ts-ignore
  @Input user: UserRandom;

  constructor(){}

  ngOnInit(): void {
  }

}
