import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmDividerComponent } from './sm-divider.component';
import { SmDividerDirective } from './sm-divider.directive';

@NgModule({
  declarations: [SmDividerComponent, SmDividerDirective],
  imports: [CommonModule, RouterModule],
  exports: [SmDividerComponent, SmDividerDirective],
})
export class SmDividerModule {}
