import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User [] = [
    {
      name: 'Satish Kumar Gupta',
      username: 'satish07',
      email: 'satishgupta@gmail.com',
    },
    {
      name: 'Ankit Sharma',
      username: 'ankit02',
      email: 'ankitsharma@gmail.com'
    },
    {
      name: 'Vikram Singh',
      username: 'vikram04',
      email: 'vikramsingh@gmail.com'
    },
    {
      name: 'Akshay Kumar',
      username: 'akshay01',
      email: 'akshaykumar@gmail.com',
    },
    {
      name: 'Anjali Sharma',
      username: 'anjali09',
      email: 'anjalisharma@gmail.com'
    },
    {
      name: 'Aryan Singh',
      username: 'aryan08',
      email: 'aryansingh@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number) {
    this.user.splice(index, 1);
  }
}
