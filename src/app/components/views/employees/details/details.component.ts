import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {

  employeeOffline: any = {};
  employeeOnline: any = {};
  id = "";

  constructor(
    private _employeeService: EmployeesService,
    private _router: Router) {

    // console.log(this._router.getCurrentNavigation()?.extras.state)
    try {
      this.employeeOffline = this._router.getCurrentNavigation()?.extras.state
      this.id = this.employeeOffline.id;
    } catch (error) {
      this._router.navigate(['list'])
    }

  }

  ngOnInit(): void {
    this._employeeService.getEmployee$(this.id).subscribe((res) => {
      this.employeeOnline = res;
    })
  }




}
