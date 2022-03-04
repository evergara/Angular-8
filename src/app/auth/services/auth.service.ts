import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, 
         createUserWithEmailAndPassword, signOut, authState} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginData } from '@auth/model/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth ) { }

  login(login: LoginData) {
    return this.auth.signInWithEmailAndPassword(login.email, login.password);
    //return signInWithEmailAndPassword(this.auth, login.email, login.password);
  }

  register(login: LoginData) {
    return this.auth.createUserWithEmailAndPassword(login.email, login.password);
    //return createUserWithEmailAndPassword(this.auth, login.email, login.password);
  }

  logout() {
    return this.auth.signOut();
    //return signOut(this.auth);
  }

  hasSession(): Observable<boolean> {
    return this.auth.authState
    .pipe(
      // tap(user => {
      //   if (user) {
      //     localStorage.setItem('currentUser', JSON.stringify(user));
      //     const currentUser = localStorage.getItem('currentUser');
      //     const original = JSON.parse(currentUser);
      //   }
      // }),
      map(user => user === null ? false : true),
    );
  }
}
