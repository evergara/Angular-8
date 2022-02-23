import { Component } from '@angular/core';

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
}