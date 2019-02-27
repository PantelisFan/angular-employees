import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
              .subscribe(data=> this.employees = data)
  }
}

//   newEmployee(){
//     this._employeeService.create()
//     .then((data)=>{
//       console.log('new Employee: ', data);
//     })
//     .catch(err=>{
//       console.log('err',err);
//     })
//   }

// }
