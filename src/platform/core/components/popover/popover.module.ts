import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NovoOverlayModule } from '../overlay';
import { NovoListModule } from '../list';
import { NovoPopoverComponent } from './popover.component';
import { NovoPopoverDirective } from './popover.directive';

@NgModule({
  imports: [NovoOverlayModule, NovoListModule, OverlayModule, CommonModule],
  exports: [NovoPopoverComponent, NovoPopoverDirective],
  declarations: [NovoPopoverComponent, NovoPopoverDirective],
})
export class NovoPopoverModule {}
