import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../shared/components/button/button.module';

import { UserComponent } from './user.component';

@NgModule({
  exports: [UserComponent],
  declarations: [UserComponent],
  imports: [ButtonModule, CommonModule],
})
export class UserModule {}
