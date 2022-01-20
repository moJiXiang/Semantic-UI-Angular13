import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmFlagComponent } from './sm-flag.component';

@NgModule({
  declarations: [SmFlagComponent],
  imports: [CommonModule, RouterModule],
  exports: [SmFlagComponent],
})
export class SmFlagModule {}
