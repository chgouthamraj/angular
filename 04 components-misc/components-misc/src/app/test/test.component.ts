import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>this is test component</h2>
    <!--{{ 'hello' + parentData }}-->
    {{ 'hello' + name }}
    <button (click)="fireEvent()">Fire event</button>

    <h2>{{ 'Codevolution' | lowercase }}</h2>
    <h2>{{ 'Codevolution' | uppercase }}</h2>
    <h2>{{ 'Welcome to codevolution' | titlecase }}</h2>
    <h2>{{ 'Codevolution' | slice : 3 : 6 }}</h2>
    <h2>{{ person | json }}</h2>
    <h2>{{ 5.678 | number : '1.2-3' }}</h2>
    <h2>{{ 5.678 | number : '3.4-5' }}</h2>
    <h2>{{ 5.678 | number : '3.1-2' }}</h2>

    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency : 'GBP' }}</h2>
    <h2>{{ 0.25 | currency : 'GBP' : 'code' }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date : 'short' }}</h2>
    <h2>{{ date | date : 'shortDate' }}</h2>
    <h2>{{ date | date : 'shortTime' }}</h2>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  // @Input() parentData: any;
  // using it as alias
  public person = {
    firstName: 'John',
    lastName: 'Doe',
  };

  public date = new Date();
  @Input('parentData') name: any;
  @Output() childEvent = new EventEmitter<string>();
  fireEvent() {
    this.childEvent.emit('Hey goutham raj');
  }
}
