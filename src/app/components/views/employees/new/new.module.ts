import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';



@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    ReactiveFormsModule
  ],

})
export class NewModule { }
