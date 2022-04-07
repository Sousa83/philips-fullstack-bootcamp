import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nome da tag que irá referenciar esse componente
  templateUrl: './app.component.html', // html do componente
  styleUrls: ['./app.component.css'], // css do componente
})
export class AppComponent {
  title = 'course-manager';

  nameOneBinding = 'SS83 1';
  nameTwoBinding = 'SS83 2';
}
