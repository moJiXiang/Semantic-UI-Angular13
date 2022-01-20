import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlagdemoComponent } from './flagdemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FlagdemoComponent }]),
  ],
  exports: [RouterModule],
})
export class FlagDemoRoutingModule {}
