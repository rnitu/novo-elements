import { Component, HostBinding } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';
import { POPOVER_DEMOS } from './demos';

let usageDoc: string = require('html-loader!markdown-loader!./docs/usage.md');

@Component({
  selector: 'demo-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  animations: [fadeAnimation],
})
export class PopoverComponent {
  @HostBinding('@routeAnimation') public routeAnimation: boolean = true;
  @HostBinding('class.demo-route-animation')
  public classAnimation: boolean = true;

  public name: string = 'Popover';
  public src: string = 'https://github.com/bullhorn/novo-elements-3.0/tree/master/src/platform/core/components/popover';
  public usageDoc: string = usageDoc;
  public demos: DEMOS = POPOVER_DEMOS;
}
