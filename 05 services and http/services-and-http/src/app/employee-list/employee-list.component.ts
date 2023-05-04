import { Component } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `<h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>`,
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  public employees: any = [];
  public errorMsg: any;
  // employees: Array<{ id: number; name: string; age: number }> = [
  //   { id: 0, name: 'Available', age: 20 },
  // ];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    // this.employees = this._employeeService.getEmployess();
    this._employeeService.getEmployess().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
