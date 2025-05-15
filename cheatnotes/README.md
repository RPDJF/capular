# Cheat notes

Angular as a CLI tool

```bash
npm i -g @angular/cli
```

## Creating an Angular app

```bash
ng new app-name
```

or for a minimalist approach:
```bash
ng new app-name --inline-style --inline-template
```

It will include style and template inline in the component instead of creating separate files.

## Creating a component

creating a component in the `components` folder:

```bash
ng g c components/component-name
```

## Importing a component

simply import the component in the decorator of the parent component (pseudo code):

```typescript
import { Component } from '@angular/core';
import { ComponentName } from './components/component-name/component-name.component';
@Component({
  selector: 'app-parent',
  ...
  imports: [ComponentName],
  template: `
    <app-selector></app-selector>
  `
})
export class ParentComponent {
  // component logic
}
```

## Data binding
### Parent to child

child.ts
```typescript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-child',
  template: `
    <p>{{ message() }}</p>
  `
})
export class ChildComponent {
  message = input('hello'); // message is the name of the variable passed from the parent with default value "hello"
}
```

parent.ts
```typescript
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-parent',
  template: `
    <app-child [message]="parentData()"></app-child>
  `
})

export class ParentComponent {
  parentData = signal('Hello from parent');
}
```

Appselector is the selector of the child component. You can find it in the child component's decorator. The selector is used to include the child component in the parent component's template.

# Argo


| argo | explanation |
|------|-------------|
| template | template is the string containing the HTML code |
| templateUrl | templateUrl is the path to the HTML file containing the template (in case of not using inline template) |
| style | style is the string containing the CSS code |
| styleUrls | styleUrls is the path to the CSS file containing the styles (in case of not using inline style) |
| selector | selector is the name of the component that will be used in the HTML code to include the component |
| imports | imports is the array of components that will be used in the current component |
| signal | signal is a function that will be used to create a signal (a reactive variable). Not mandatory for now but will be used in the future |