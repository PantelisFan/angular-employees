import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployees } from '../interfaces/iemployees'
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  private _url: string = "http://localhost:3000/employees"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployees[]>{
    return this.http.get<IEmployees[]>(this._url)
  }




//   create(){
//     let headers = new HttpHeaders({
//       'Content-Type':  'application/json'
//     });
//     return this.http.post(this._url, DEMO_EMPLOYEE, {headers}).toPromise();
//   }



// }
// let DEMO_EMPLOYEE = {
//   name: 'Iannis',
//   age: 21,
//   salary: Date.now(),
//   dateOfEmployment: new Date().toISOString()
}

let patchJSON = {
  age: 22
}