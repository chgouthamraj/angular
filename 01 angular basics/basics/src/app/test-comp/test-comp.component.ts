import { Component } from '@angular/core';

@Component({
  selector: '.app-test-comp',
  //templateUrl: './test-comp.component.html',
  //templarte in-line
  template: `<div><h1>this is in-line template</h1></div>`,
  // styleUrls: ['./test-comp.component.css'],
  //style: in-line
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestCompComponent {
  title = 'this is title in test component';
}
