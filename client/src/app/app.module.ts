import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

// Core Modules
import { CoreModule }      from './core/core.module';

// Feature Modules
import { SpellSorterModule }    from './spell-sorter/spell-sorter.module';

// Shared Modules

@NgModule({
    imports: [
        BrowserModule,

        CoreModule,
        SpellSorterModule,
        AppRoutingModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
