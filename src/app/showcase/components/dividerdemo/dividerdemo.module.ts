import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmDividerModule } from 'src/app/components/sm-divider/sm-divider.module';
import { DividerDemoRoutingModule } from './dividerdemo-routing.module';
import { DividerdemoComponent } from './dividerdemo.component';

@NgModule({
  declarations: [DividerdemoComponent],
  imports: [CommonModule, DividerDemoRoutingModule, SmDividerModule],
})
export class DividerDemoModule {}
