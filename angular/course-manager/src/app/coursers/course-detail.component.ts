import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-detail.component.html',
})
export class CourseDetailComponent implements OnInit {
  courseId: number | undefined = 0;

  // O uso de parâmetros do path da rota é via injeção dessa classe
  // E utilizando o código na implementação do "ngOnInit"
  constructor(private activtedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.activtedRoute.snapshot.paramMap.get('id');

    this.courseId = id ? +id : 0;
  }
}
