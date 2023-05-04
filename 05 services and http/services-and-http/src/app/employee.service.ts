import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '../assets/data/employees.json';
  constructor(private http: HttpClient) {}
  // getEmployess() {
  //   return [
  //     { id: 1, name: 'Andrew', age: 30 },
  //     { id: 2, name: 'Brandon', age: 25 },
  //     { id: 3, name: 'Christina', age: 26 },
  //     { id: 4, name: 'Elena', age: 28 },
  //     { id: 5, name: 'Felicia', age: 25 },
  //   ];
  // }

  getEmployess(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(this._url)
      .pipe(catchError(this.erroHandler));
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
