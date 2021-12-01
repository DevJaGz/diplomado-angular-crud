import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from '../../../../interfaces/employee.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  employees: IEmployee[] = []

  constructor(private _employeeService: EmployeesService,) { }

  ngOnInit(): void {

    this._employeeService.getEmployees$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (v) => {
          // console.log(v.map(el => el.payload.doc.id))
          // console.log(v.map(el => el.payload.doc.data()))
          this.employees = v.map(el => {
            return {
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            }
          })
          console.log(this.employees)
        },
        error: (e) => console.error(e),
        complete: () => console.info("getEmployees$ completed")
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
