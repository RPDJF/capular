import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  template: `
    <h2>Greeter Component</h2>
    <p>
      {{message()}}
    </p>
  `,
  styles: ``
})
export class GreeterComponent {
  message = input("Default greeting message from GreeterComponent");
}
