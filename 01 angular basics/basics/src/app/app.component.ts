import { Component } from '@angular/core';

//this is the metadata of the class(component decorator)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
}
