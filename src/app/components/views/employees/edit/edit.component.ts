import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUIService } from 'ng-block-ui';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

  employee: any = {}
  id = ""

  constructor(
    private _router: Router,
    private _employeeService: EmployeesService,
    private _blockUIService: BlockUIService,
    private _msg: MessagesService
  ) {
    //_router solo puede usarse en el constructor para obtener los extras, si quieren obtener luego
    // se debe utilizar 'history.state', sin embargo es agrega un parámetro más: 'navigationId' 
    // console.log(this._router.getCurrentNavigation()?.extras.state)
    try {
      this.employee = this._router.getCurrentNavigation()?.extras.state
      this.id = this.employee.id
      delete this.employee?.id
    } catch (error) {
      this._router.navigate(['list'])
    }

  }

  ngOnInit(): void {
  }

  edit(employee: IEmployee): void {
    this._blockUIService.start('block-target', "Editando empleado...")
    this._employeeService.editEmployee(this.id, employee)
      .then(() => {
        this._blockUIService.stop('block-target')
        this._msg.successMessage("Empleado editado", "El empleado se ha editado satisfactoriamente.")
        this.navigateTo('list')
      })
      .catch((err) => {
        this._blockUIService.stop('block-target')
        this._msg.errorMessage("Error", "No fue posible editar el empleado.", err)
        this.navigateTo('list')
      })
  }

  navigateTo(path: string): void {
    this._router.navigate([path])
  }

}
