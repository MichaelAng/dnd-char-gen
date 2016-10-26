import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

// Core Modules
import { NavHeaderModule }      from './core/nav-header/nav-header.module';
import { PageNotFoundModule }   from './core/page-not-found/page-not-found.module';

// Feature Modules
import { SpellListModule }      from './spell-list/spell-list.module';

// Shared Modules

@NgModule({
    imports: [
        BrowserModule,

        NavHeaderModule,
        SpellListModule,
        PageNotFoundModule,

        AppRoutingModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
