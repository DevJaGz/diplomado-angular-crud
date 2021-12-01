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


  bussy = false;
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

  // validateDate(control: AbstractControl) {
  //   if (control.value) {
  //     const date = moment(control.value).format('DD-MM-YYYY')
  //     const actualDate = moment().format('DD-MM-YYYY')
  //     if (date > actualDate) return { limitError: "Fecha mayor a la actual" }
  //   }
  //   return null
  // }

  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched
  }


  async addEmployee() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched()
      return
    }
    this._blockUIService.start('test')
    this.setBusy()
    const { value } = this.employeeForm;
    let error = ""
    const res = await this._employeeService.addEmployee(value).catch(e => { error = e })
    // const res: any = await this.testReject().catch(e => { error = e })
    this.setFree()
    this._blockUIService.stop('test')
    if (res) {
      this.successMessage("Empleado Agregado", "Empleado agregado satisfactoriamente.")
      this.employeeForm.reset()
    } else {
      this.errorMessage("Error", "No fue posible agregar al empleado.", error)
    }
  }

  testReject() {
    return new Promise<any>((resolve, reject) => {
      reject("error sdfskdjhf a´sk ´fker´f ke")
    })
  }

  successMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
    })
  }

  errorMessage(title: string, message: string, error: string) {
    Swal.fire({
      title: title,
      text: message + " " + error,
      icon: 'error',
      confirmButtonText: "OK",
      confirmButtonColor: '#375A7F',
    })
  }


  setBusy() {
    this.bussy = true;
    Object.values(this.employeeForm.controls).forEach(field => field.disable())
  }

  setFree() {
    this.bussy = false;
    Object.values(this.employeeForm.controls).forEach(field => field.enable())
  }


}
