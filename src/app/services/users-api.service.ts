import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseUserRandom } from '../model/responserserrandom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<ResponseUserRandom> {
    return this.http.get<ResponseUserRandom>('https://randomuser.me/api?results=5');
  }
}
