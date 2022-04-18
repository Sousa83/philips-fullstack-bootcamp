import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';

@NgModule({
  exports: [UserComponent],
  declarations: [UserComponent],
})
export class UserModule {}
