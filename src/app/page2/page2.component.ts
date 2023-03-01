import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  users: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // get users data from backend or service
    this.users = [
      { name: 'User 1', age: 20, gender: 'Male' },
      { name: 'User 2', age: 25, gender: 'Female' },
      { name: 'User 3', age: 30, gender: 'Male' },
      { name: 'User 3', age: 30, gender: 'Male' },
      { name: 'User 4', age: 30, gender: 'Male' },
      { name: 'User 5', age: 20, gender: 'Male' },
    ];
  }

}