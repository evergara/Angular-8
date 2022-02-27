import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  title: string = 'Esto es angular';
  name: string = 'Nicolas';
  rockBandName: string;

  rockBands = ['Nirvana', 'Los prisoneros', 'Cass', 'as'];
  constructor() { 
    this.rockBandName = '';
  }

  users: any[] = [
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

  ngOnInit(): void {
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
