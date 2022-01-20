import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixButtonModule } from '../components/pix-button/pix-button.module';
import { PixTagModule } from '../components/pix-tag/pix-tag.module';
import { SmButtonModule } from '../components/sm-button/sm-button.module';
import { SmSidebarModule } from '../components/sm-sidebar/sm-sidebar.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PixButtonModule,
    PixTagModule,
    SmSidebarModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
