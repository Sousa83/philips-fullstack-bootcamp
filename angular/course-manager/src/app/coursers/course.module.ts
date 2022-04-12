import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';

import { StartModule } from '../shared/components/star/star.module';
import { ReplaceModule } from '../shared/pipes/replace/replace.module';

@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent],
  imports: [
    FormsModule,
    StartModule,
    CommonModule,
    ReplaceModule,
    // forChild é para carregar a rotas no bootstrap do módulo, uma vez que não é o root
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'course/:id', component: CourseDetailComponent },
    ]),
  ],
})
export class CourseModule {}
