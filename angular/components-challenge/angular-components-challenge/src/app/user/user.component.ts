import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  users = [
    {
      id: 1,
      name: 'Ricardo',
      email: 'ricarosousa83@gmail.com',
      dioUrl: 'https://web.dio.me/users/ricarosousa83?tab=achievements',
      imageUrl:
        'https://hermes.digitalinnovation.one/users/student/8cd55ac9-72ad-4e50-80df-bf6dbdca6523.jpg',
      role: 'developer',
      departament: 'technology',
    },
  ];
}
