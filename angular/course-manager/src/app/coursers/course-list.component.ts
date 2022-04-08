import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';

@Component({
  // todos os componentes são prefixados com o nome da app por padrão
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  // A implementação de métodos de ciclo de vida da-se a implementação de interfaces
  ngOnInit(): void {
    this.courses.push(
      new Course(
        1,
        'SS-1',
        'Angular 8 - introduction',
        19.9,
        4.5,
        '',
        5,
        '2019-11-01',
        ''
      )
    );

    this.courses.push(
      new Course(
        2,
        'SS-2',
        'Angular 8 - components managament',
        19.9,
        4.5,
        '',
        5,
        '2019-11-01',
        ''
      )
    );
  }
}
