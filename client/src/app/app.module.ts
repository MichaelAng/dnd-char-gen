import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { HttpModule }  from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

// Core Modules
import { CoreModule }      from './core/core.module';

// Feature Modules
import { SpellSorterModule }      from './spell-sorter/spell-sorter.module';

// Shared Modules

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),

        CoreModule,
        SpellSorterModule,

        AppRoutingModule
     ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
