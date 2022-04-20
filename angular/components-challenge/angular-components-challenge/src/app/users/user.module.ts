import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '../shared/components/image/image.module';
import { ButtonModule } from '../shared/components/button/button.module';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  exports: [ListComponent],
  declarations: [ListComponent, FormComponent],
  imports: [ButtonModule, CommonModule, ImageModule],
})
export class UserModule {}
