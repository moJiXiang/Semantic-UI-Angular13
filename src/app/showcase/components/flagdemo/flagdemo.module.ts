import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmFlagModule } from 'semantic/sm-flag';
import { SmDividerModule } from 'src/app/components/sm-divider/sm-divider.module';
import { FlagDemoRoutingModule } from './flagdemo-routing.module';
import { FlagdemoComponent } from './flagdemo.component';

@NgModule({
  declarations: [FlagdemoComponent],
  imports: [CommonModule, FlagDemoRoutingModule, SmFlagModule],
})
export class FlagDemoModule {}
