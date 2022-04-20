import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './users/user.module';
import { RoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [UserModule, RoutingModule, BrowserModule, HttpClientModule],
})
export class AppModule {}
