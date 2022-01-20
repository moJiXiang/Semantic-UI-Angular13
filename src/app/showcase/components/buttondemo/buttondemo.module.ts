import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmButtonModule } from 'src/app/components/sm-button/sm-button.module';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
import { ButtondemoComponent } from './buttondemo.component';

@NgModule({
  declarations: [ButtondemoComponent],
  imports: [CommonModule, ButtonDemoRoutingModule, SmButtonModule],
})
export class ButtonDemoModule {}
