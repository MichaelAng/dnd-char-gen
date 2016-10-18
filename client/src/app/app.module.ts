import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';
import { routing }              from './app.routing';

// Core Modules
import { NavHeaderModule }      from './core/nav-header/nav-header.module';
import { PageNotFoundModule }   from './core/page-not-found/page-not-found.module';

// Feature Modules
import { SpellListModule }      from './spell-list/spell-list.module';

// Shared Modules

@NgModule({
    imports: [
        BrowserModule,
        routing,

        NavHeaderModule,
        SpellListModule,
        PageNotFoundModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
