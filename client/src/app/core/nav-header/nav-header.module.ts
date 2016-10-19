import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { NavHeaderComponent }         from './nav-header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NavHeaderComponent
    ],
    exports: [
        NavHeaderComponent
    ]
})
export class NavHeaderModule { }
