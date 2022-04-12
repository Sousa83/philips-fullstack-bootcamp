import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { CourseListComponent } from './coursers/course-list.component';

import { ReplacePipe } from './pipes/replace.pipe';
import { CourseDetailComponent } from './coursers/course-detail.component';

@NgModule({
  // declarations é por onde importamos componentes, pipes, etc num módulo
  declarations: [
    ReplacePipe,
    AppComponent,
    StarComponent,
    HeaderComponent,
    CourseListComponent,
    CourseDetailComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    // forRoot é para carregar a rotas no bootstrap na app
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      { path: 'course/:id', component: CourseDetailComponent },
      { path: 'courses', component: CourseListComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
