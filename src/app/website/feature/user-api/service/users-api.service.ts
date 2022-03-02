import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseUserRandom } from '@feature/user-api/model/responserserrandom';
import { map, Observable } from 'rxjs';
import { UserRandom } from '../model/userrandom';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getAllUser(results: number = 5){
    return this.http.get<ResponseUserRandom>(`https://randomuser.me/api?results=${results}`).pipe(
      map(response => response.results),
      map(users => users.map(user => {
        user.county = "Colombia"
        return user;
      }))
    );
  }
}
