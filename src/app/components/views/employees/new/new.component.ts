import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { MessagesService } from 'src/app/services/messages.service';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: [
  ]
})
export class NewComponent implements OnInit {

  @BlockUI("block-item") blockUI: NgBlockUI = {} as NgBlockUI;


  constructor(
    private _employeeService: EmployeesService,
    private _blockUIService: BlockUIService,
    private _msg: MessagesService
  ) { }

  ngOnInit(): void {
  }


  addEmployee(empleoyee: IEmployee): void {
    this._blockUIService.start('block-target', "Agregando empleado...")
    this._employeeService.addEmployee(empleoyee)
      .then((res) => {
        console.log("Empleado agregado", res);
        this._blockUIService.stop('block-target')
        const { id, parent } = res
        this._msg.successMessage("Empleado agregado", `El nuevo empleado se ha agregado satisfactoriamente a <b>${parent.path}</b>. Id generado: <b>${id}</b>`)
      })
      .catch((error) => {
        this._blockUIService.stop('block-target')
        this._msg.errorMessage("Error", "No fue posible agregar al empleado.", error)
      })
  }


}
