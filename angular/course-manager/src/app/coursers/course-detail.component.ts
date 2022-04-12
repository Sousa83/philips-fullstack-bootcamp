import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit {
  course: Course;

  // O uso de parâmetros do path da rota é via injeção da classe ActivatedRoute
  // E utilizando o código na implementação do "ngOnInit"
  constructor(
    private activtedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const id = this.activtedRoute.snapshot.paramMap.get('id');

    this.courseService.retriveById(+!!id).subscribe({
      next: (course) => {
        if (course) {
          this.course = course;
        }
      },
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: () => console.info(`Saved with sucess`),
      error: () => console.error(`Error on save`),
    });
  }
}
