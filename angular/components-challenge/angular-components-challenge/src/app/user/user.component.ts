import { Component, OnInit } from '@angular/core';

import { User } from '../shared/interfaces/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.index().subscribe({
      next: (users) => (this.users = users),
    });
  }
}
