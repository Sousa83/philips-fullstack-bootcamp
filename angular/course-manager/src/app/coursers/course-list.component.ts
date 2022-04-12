import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  // todos os componentes são prefixados com o nome da app por padrão
  // Uma vez que tenho atrelado uma rota para um componente, o uso do "selector" não é mais necessário
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
    this.retriveAll();
  }

  retriveAll(): void {
    // As incrições nos métodos do angular http móule recebem callbacks para executarem
    this.courseService.retriveAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteById(id: number): void {
    this.courseService.delete(id).subscribe({
      next: () => {
        console.log('Deleted');
        this.retriveAll();
      },
      error: () => console.log('Error on delete'),
    });
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
