import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SmSidebarComponent } from './sm-sidebar.component';

@NgModule({
  declarations: [SmSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SmSidebarComponent],
})
export class SmSidebarModule {}
