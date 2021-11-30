import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { EmployeesFormComponent } from './utils/employees-form/employees-form.component';
import { AppRoutingModule } from '../../../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    EmployeesFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    EmployeesFormComponent
  ]
})
export class SharedModule { }
