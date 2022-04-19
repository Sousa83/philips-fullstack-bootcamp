import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '../shared/components/image/image.module';
import { ButtonModule } from '../shared/components/button/button.module';

import { UserComponent } from './user.component';

@NgModule({
  exports: [UserComponent],
  declarations: [UserComponent],
  imports: [ButtonModule, CommonModule, ImageModule],
})
export class UserModule {}
