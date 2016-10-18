import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { routing }              from '../../app.routing';

import { NavHeaderComponent }         from './nav-header.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        NavHeaderComponent
    ],
    exports: [
        NavHeaderComponent
    ]
})
export class NavHeaderModule { }
