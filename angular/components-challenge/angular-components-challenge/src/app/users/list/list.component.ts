import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/interfaces/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) {}

  // implementar o form usando form builder - async services dio
  ngOnInit(): void {
    this.userService.index().subscribe({
      next: (users) => (this.users = users),
    });
  }
}
