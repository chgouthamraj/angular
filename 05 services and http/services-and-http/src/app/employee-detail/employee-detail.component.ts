import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }}. {{ employee.name }} - {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  public employees: any = [];
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    // this.employees = this._employeeService.getEmployess();
    this._employeeService.getEmployess().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
