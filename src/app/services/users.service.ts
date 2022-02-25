import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { 

  }

  getAllUser(): User[] {
    return [
          { 
            id: 1,
            name: 'Emerson',
            email: 'mycorreo@gmail.com',
            age: 25,
            isSingle: false,
            avatar: ''
          },
          { 
          id: 2,
          name: 'Brilis',
          email: 'brilis@gmail.com',
          age: 25,
          isSingle: true,
          avatar: ''
        }
    ]
  }
}
