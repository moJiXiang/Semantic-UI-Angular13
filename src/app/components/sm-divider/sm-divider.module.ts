import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmDividerComponent } from './sm-divider.component';

@NgModule({
  declarations: [SmDividerComponent],
  imports: [CommonModule, RouterModule],
  exports: [SmDividerComponent],
})
export class SmDividerModule {}
