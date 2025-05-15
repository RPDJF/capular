import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
      <h1>{{title()}}!</h1>
      <nav>
        <a target="blank" href="#">Hello</a>
        <a target="blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">World</a>
      </nav>
    </header>
  `,
  styles: [ `
    nav {
      display: flex;
      gap: 50px;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 50px;
      background-color:rgb(115, 151, 186);
      height: 50px;
    }
  `],
})
export class HeaderComponent {
  title = signal('Hello World');
}
