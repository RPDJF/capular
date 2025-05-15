import { Component, signal } from '@angular/core';
import { GreeterComponent } from '../components/greeter/greeter.component';

@Component({
  selector: 'app-home',
  imports: [GreeterComponent],
  template: `
    <p>
      This feels like 127.0.0.1 (did you get the joke?).
      <app-greeter></app-greeter>
      <app-greeter [message]="homeMessage()"></app-greeter>
    </p>
  `,
  styles: ``
})
export class HomeComponent {
  homeMessage = signal("This message is generated from the HomeComponent and passed to the GreeterComponent");
}
