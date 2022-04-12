import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { CourseModule } from './coursers/course.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './notFound/not-found.component';

@NgModule({
  // declarations é por onde importamos componentes, pipes, etc num módulo
  declarations: [AppComponent],
  imports: [
    CoreModule,
    CourseModule,
    BrowserModule,
    HttpClientModule,
    // forRoot é para carregar a rotas no bootstrap na app
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
