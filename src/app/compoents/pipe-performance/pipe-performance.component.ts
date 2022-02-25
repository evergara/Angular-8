import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-performance',
  templateUrl: './pipe-performance.component.html',
  styleUrls: ['./pipe-performance.component.scss']
})
export class PipePerformanceComponent implements OnInit {

  name:string;

  users = [
    {
      name: 'Emerson',
      number: 10
    },
    {
      name: 'Jesus',
      number: 10
    }
  ]

  constructor() { 
    this.name = ""
  }



  ngOnInit(): void {
  }

  addUser(): void {
    console.log('change....');
    this.users.push({
      name: this.name,
      number: 12
    })
  }

}
