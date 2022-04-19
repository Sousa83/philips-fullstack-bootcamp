import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input()
  src = '';

  @Input()
  alt? = '';

  @Input()
  width? = 50;

  @Input()
  height? = 50;
}
