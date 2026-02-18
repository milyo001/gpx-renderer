import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gpx-renderer';

  test(): void {
    const test = (a: number) => {
      return a + 1;
    };
  }
}
