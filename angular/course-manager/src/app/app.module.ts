import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { CourseListComponent } from './coursers/course-list.component';

import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  // declarations é por onde importamos componentes, pipes, etc num módulo
  declarations: [
    ReplacePipe,
    AppComponent,
    StarComponent,
    HeaderComponent,
    CourseListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    // forRoot é para carregar a rotas no bootstrap na app
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      { path: 'courses', component: CourseListComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
