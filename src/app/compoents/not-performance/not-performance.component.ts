import { Component, OnInit } from '@angular/core';

const fibonacci = (num: number): number => {
  if(num === 1 ||  num === 2){
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2 );
}

@Component({
  selector: 'app-not-performance',
  templateUrl: './not-performance.component.html',
  styleUrls: ['./not-performance.component.scss']
})
export class NotPerformanceComponent implements OnInit {
   
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
    this.users.push({
      name: this.name,
      number: 12
    })
  }

  calcFib(value:number): number {
    console.log('fib');
    return fibonacci(value);
  }
}
