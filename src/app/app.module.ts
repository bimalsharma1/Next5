import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Next5Service } from './next5.service';
import { Next5Component } from './next5/next5.component';


@NgModule({
  declarations: [
    AppComponent,
    Next5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Next5Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
