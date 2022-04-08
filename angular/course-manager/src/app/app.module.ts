import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './coursers/course-list.component';

@NgModule({
  // declarations é por onde importamos componentes num módulo
  declarations: [AppComponent, CourseListComponent, StarComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}