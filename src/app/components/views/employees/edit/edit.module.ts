import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { SharedModule } from '../../shared/shared.module';
import { BlockUIModule } from 'ng-block-ui';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    SharedModule,
    BlockUIModule
  ]
})
export class EditModule { }
