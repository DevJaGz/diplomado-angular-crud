import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';

import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    ReactiveFormsModule,
    BlockUIModule
  ]
})
export class NewModule { }
