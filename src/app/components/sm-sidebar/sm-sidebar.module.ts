import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmSidebarComponent } from './sm-sidebar.component';

@NgModule({
  declarations: [SmSidebarComponent],
  imports: [CommonModule],
  exports: [SmSidebarComponent],
})
export class SmSidebarModule {}
