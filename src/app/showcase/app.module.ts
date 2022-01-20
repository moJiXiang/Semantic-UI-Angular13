import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmButtonModule } from '../components/sm-button/sm-button.module';
import { SmSidebarModule } from '../components/sm-sidebar/sm-sidebar.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DividerdemoComponent } from './components/dividerdemo/dividerdemo.component';
import { SmDividerModule } from '../components/sm-divider/sm-divider.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SmSidebarModule, SmDividerModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
