import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styles: [
  ]
})
export class EmployeesFormComponent implements OnInit {

  @Input() employeeData = {} as IEmployee;
  @Output() employee = new EventEmitter<IEmployee>();
  @Input() edit: boolean = false;


  title = "";
  employeeForm: FormGroup;
  constructor(
    private _FB: FormBuilder
  ) {

    this.employeeForm = this._FB.group({
      name: [, Validators.required],
      lastName: [, Validators.required],
      email: [, [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      startDate: [, [Validators.required]],
    })

  }

  ngOnInit(): void {
    if (this.edit) {
      this.employeeForm.setValue(this.employeeData)
    }
  }


  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched()
      return
    }

    const { value } = this.employeeForm;

    this.employee.emit(value)
    this.employeeForm.reset()

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
