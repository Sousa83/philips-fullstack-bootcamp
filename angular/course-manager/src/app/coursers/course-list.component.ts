import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  // todos os componentes são prefixados com o nome da app por padrão
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Array<Course> = [];
  filteredCourses: Array<Course> = [];

  filterBy = '';

  // A injeção de dependências em componentes da-se pelos construtores
  constructor(private courseService: CourseService) {}

  // A implementação de métodos de ciclo de vida da-se a implementação de interfaces
  ngOnInit(): void {
    this.courses = this.courseService.retriveAll();
    this.filteredCourses = this.courses;
  }

  public set filter(value: string) {
    this.filterBy = value;

    const valueLowerCase = value.toLocaleLowerCase();
    this.filteredCourses = this.courses.filter(
      (c) => c.name.toLocaleLowerCase().indexOf(valueLowerCase) > -1
    );
  }

  public get filter(): string {
    return this.filterBy;
  }
}
