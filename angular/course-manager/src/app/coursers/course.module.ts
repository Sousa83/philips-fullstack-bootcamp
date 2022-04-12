import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StarComponent } from '../star/star.component';
import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';

import { ReplacePipe } from '../pipes/replace.pipe';

@NgModule({
  declarations: [
    ReplacePipe,
    StarComponent,
    CourseListComponent,
    CourseDetailComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    // forChild é para carregar a rotas no bootstrap do módulo, uma vez que não é o root
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'course/:id', component: CourseDetailComponent },
    ]),
  ],
})
export class CourseModule {}
