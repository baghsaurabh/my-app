import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  orders: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // get orders data from backend or service
    this.orders = [
      { id: 1, date: '2021-09-01', customer: 'Customer 1', amount: 100 },
      { id: 2, date: '2021-09-02', customer: 'Customer 2', amount: 200 },
      { id: 3, date: '2021-09-03', customer: 'Customer 3', amount: 300 },
    ];
  }

}