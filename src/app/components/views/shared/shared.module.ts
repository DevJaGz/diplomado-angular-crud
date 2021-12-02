import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { EmployeesFormComponent } from './utils/employees-form/employees-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../../app-routing.module';
import { RouterModule } from '@angular/router';
import { LimitStringPipe } from './pipes/limit-string.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    EmployeesFormComponent,
    LimitStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    EmployeesFormComponent,
    LimitStringPipe
  ]
})
export class SharedModule { }
