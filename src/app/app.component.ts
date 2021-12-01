import { Component } from '@angular/core';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @BlockUI("block-item") blockUI: NgBlockUI = {} as NgBlockUI;
  title = 'angular-crud';

  constructor(
    private _blockUIService: BlockUIService) {

  }


}
