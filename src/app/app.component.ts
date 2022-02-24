import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Esto es angular';
  name: string = 'Nicolas';
  rockBandName: string;

  rockBands = ['Nirvana', 'Los prisoneros', 'Cass', 'as'];
  
  users: User[] = [
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


  constructor(){
    this.rockBandName = '';
  }

  changeTittle(): void {
    this.title = "Aprendiendo Angular";
    this.changeName();
  }

  private changeName(): void {
    this.name = "Nombre cambiado";
  }

  private cleanRockBandName(): void {
    this.rockBandName = '';
  }

  addRockBand(): void {
    if(this.rockBandName != ''){
      this.rockBands.push(this.rockBandName);
      this.cleanRockBandName();
    }
  }

  emptyRockBand(): void {
    this.rockBands = [];
  }

  deleteRockBand(index: number): void {
    this.rockBands.splice(index, 1);
  }

  updateRockBand(index: number): void {
    this.rockBands[index] = 'Se ha cambiado';
  }
}