import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SloginComponent } from './slogin/slogin.component';
import { ShomeComponent } from './shome/shome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedmodulesModule } from './sharedmodules/sharedmodules.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SloginComponent, ShomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmodulesModule,
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
