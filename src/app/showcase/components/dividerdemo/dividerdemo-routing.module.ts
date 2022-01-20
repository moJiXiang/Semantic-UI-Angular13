import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DividerdemoComponent } from './dividerdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: DividerdemoComponent }]),
  ],
  exports: [RouterModule],
})
export class DividerDemoRoutingModule {}
