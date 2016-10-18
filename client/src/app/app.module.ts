import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';


import { NavHeaderModule }      from './nav-header/nav-header.module';


@NgModule({
    imports: [
        BrowserModule,

        NavHeaderModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
