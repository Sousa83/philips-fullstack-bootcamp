import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
})
export class StarComponent implements OnChanges {
  // este decorator declara uma propriedade que o componente pode receber
  @Input()
  rating = 0;
  startWidth = 0;

  // ngOnChanges é um life-cicle de mudanças no estado do componente
  ngOnChanges(changes: SimpleChanges): void {
    this.startWidth = (this.rating * 74) / 5;
  }
}
