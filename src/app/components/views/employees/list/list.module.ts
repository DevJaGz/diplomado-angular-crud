import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { BlockUIModule } from 'ng-block-ui';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    BlockUIModule
  ]
})
export class ListModule { }
