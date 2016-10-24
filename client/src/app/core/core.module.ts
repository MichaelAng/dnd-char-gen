import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { NavHeaderComponent }         from './nav-header/nav-header.component';
import { PageNotFoundComponent }         from './page-not-found/page-not-found.component';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    declarations: [
        NavHeaderComponent,
        PageNotFoundComponent
    ],
    exports: [
        NavHeaderComponent,
        PageNotFoundComponent
    ]
})
export class CoreModule { }
