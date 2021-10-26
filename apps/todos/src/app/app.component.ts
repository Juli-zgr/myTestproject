import { Component } from '@angular/core';

@Component({
  selector: 'myproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  toDisplay = false;

  clicked() { this.toDisplay = !this.toDisplay; }
  toMessage() {
    console.log(`The light is ${this.toDisplay ? 'On' : 'Off'}`);
    return `The light is ${this.toDisplay ? 'On' : 'Off'}`;
  }
}
