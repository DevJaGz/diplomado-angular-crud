import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

import { BlockUIModule } from 'ng-block-ui';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    SharedModule,
    BlockUIModule
  ]
})
export class NewModule { }
