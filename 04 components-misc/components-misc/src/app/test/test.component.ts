import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>this is test component</h2>
    <!--{{ 'hello' + parentData }}-->
    {{ 'hello' + name }}
    <button (click)="fireEvent()">Fire event</button>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  // @Input() parentData: any;
  // using it as alias
  @Input('parentData') name: any;
  @Output() childEvent = new EventEmitter<string>();
  fireEvent() {
    this.childEvent.emit('Hey goutham raj');
  }
}
