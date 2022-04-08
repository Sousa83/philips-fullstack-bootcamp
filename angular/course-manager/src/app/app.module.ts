import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './coursers/course-list.component';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  // declarations é por onde importamos componentes, pipes, etc num módulo
  declarations: [AppComponent, CourseListComponent, StarComponent, ReplacePipe],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
