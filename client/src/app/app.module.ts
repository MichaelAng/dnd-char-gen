import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

import { NavHeaderModule }      from './core/nav-header/nav-header.module';
import { SpellListModule }      from './spell-list/spell-list.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,

        NavHeaderModule,
        SpellListModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
