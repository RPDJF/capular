import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header></app-header>
    <main>
      <app-home></app-home>
    </main>
    <router-outlet />
  `,
  styles: [`
    :host {
      padding: 0;
      margin: 0;
    }
    
    main {
      margin: 0 20px;
    }`],
})
export class AppComponent {
}
