import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'welcome' + name }}</h2>
    <!--we can use javascript functions-->
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <!--Call functions-->
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>

    <input [id]="myId" type="text" value="raj" />
    <input [disabled]="isDisabled" id="{{ myId }}" type="text" value="raj" />
    <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="raj" />

    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    <h2 class="text-special" [class]="successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>
    <h2 [ngClass]="messageClasses">Message</h2>

    <h2 [style.color]="'orange'">Style binding</h2>
    <h2 [style.color]="hasError ? 'orange' : 'blue'">Style binding</h2>
    <h2 [style.color]="highlightColor">Style binding2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 4</h2>
    <br />

    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting = 'Welcome Vishwas'">Greet Vishwas</button>
    <br /><br />
    {{ greeting }}

    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button> <br /><br />

    <input [(ngModel)]="userName" type="text" />
    {{ userName }} `,

  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'krishna';

  public siteUrl = window.location.href;
  public myId = 'testID';

  public isDisabled = false;

  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public successClass = 'text-success';
  public highlightColor = 'red';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  public greeting = '';

  public userName = '';

  constructor() {}
  ngOnInit() {}
  greetUser() {
    return 'function' + '  ' + this.name;
  }

  onClick(event: any) {
    console.log(event);
    this.greeting = 'welcome here';
  }

  logMessage(value: any) {
    console.log(value);
  }
}
