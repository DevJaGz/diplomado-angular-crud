import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from '../../../../interfaces/employee.interface';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit, OnDestroy {
  @BlockUI("block-item") blockUI: NgBlockUI = {} as NgBlockUI;

  private unsubscribe$ = new Subject<void>();

  employees: IEmployee[] = []

  navigationExtras: NavigationExtras = {} as NavigationExtras;

  constructor(
    private _router: Router,
    private _blockUIService: BlockUIService,
    private _employeeService: EmployeesService) { }

  ngOnInit(): void {

    this._blockUIService.start('block-target', "Cargando empleados")
    this._employeeService.getEmployees$()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          this._blockUIService.stop('block-target')
          this.employees = res
          // console.log(this.employees)
        },
        error: (e) => {
          this._blockUIService.stop('block-target')
          console.error(e)
        },
        // complete: () => console.info("getEmployees$ completed")
      })
  }



  edit(employee: IEmployee) {
    this.navigationExtras.state = employee;
    this._router.navigate(['edit'], this.navigationExtras)
  }

  view(employee: IEmployee) {
    this.navigationExtras.state = employee;
    this._router.navigate(['details'], this.navigationExtras)
  }

  delete(id: string | undefined) {

  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
