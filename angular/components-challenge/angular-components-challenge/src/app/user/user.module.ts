import { NgModule } from '@angular/core';

import { ButtonModule } from '../shared/components/button/button.module';

import { UserComponent } from './user.component';

@NgModule({
  imports: [ButtonModule],
  exports: [UserComponent],
  declarations: [UserComponent],
})
export class UserModule {}
