import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2'
import { EmployeesService } from 'src/app/services/employees.service';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';




@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: [
  ]
})
export class NewComponent implements OnInit {

  @BlockUI("block-item") blockUI: NgBlockUI = {} as NgBlockUI;


  // bussy = false;
  employeeForm: FormGroup;

  constructor(
    private _FB: FormBuilder,
    private _employeeService: EmployeesService,
    private _blockUIService: BlockUIService
  ) {
    this.employeeForm = this._FB.group({
      name: [, Validators.required],
      lastName: [, Validators.required],
      email: [, [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      startDate: [, [Validators.required]],
    })

  }

  ngOnInit(): void {
  }


  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched
  }


  addEmployee() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched()
      return
    }
    const { value } = this.employeeForm;

    this._blockUIService.start('block-target', "Agregando empleado")
    this._employeeService.addEmployee(value)
      .then((res) => {
        console.log("Empleado agregado", res);
        this._blockUIService.stop('block-target')
        const { id, parent } = res
        this.successMessage("Empleado agregado", `El nuevo empleado se ha agregado satisfactoriamente a <b>${parent.path}</b>. Id generado: <b>${id}</b>`)
        this.employeeForm.reset()
      })
      .catch((error) => {
        this._blockUIService.stop('block-target')
        this.errorMessage("Error", "No fue posible agregar al empleado.", error)
      })
  }


  successMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      html: message,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
      background: '#f7f7f7',
    })
  }

  errorMessage(title: string, message: string, error: string) {
    Swal.fire({
      title: title,
      html: message + "<br>" + `<b>${error}</b>`,
      icon: 'error',
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
      background: '#f7f7f7'
    })
  }


  // COMPARAR FECHAS
  // validateDate(control: AbstractControl) {
  //   if (control.value) {
  //     const date = moment(control.value).format('DD-MM-YYYY')
  //     const actualDate = moment().format('DD-MM-YYYY')
  //     if (date > actualDate) return { limitError: "Fecha mayor a la actual" }
  //   }
  //   return null
  // }

  // DESHABILITAR CAMPOS DEL FORMULARIO
  // setBusy() {
  //   this.bussy = true;
  //   Object.values(this.employeeForm.controls).forEach(field => field.disable())
  // }

  // setFree() {
  //   this.bussy = false;
  //   Object.values(this.employeeForm.controls).forEach(field => field.enable())
  // }


}
