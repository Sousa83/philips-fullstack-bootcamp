import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './users/form/form.component';
import { ListComponent } from './users/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: 'users', component: ListComponent },
  { path: 'users/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
