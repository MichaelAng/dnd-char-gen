import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { SpellListComponent }   from './spell-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SpellListComponent
    ],
    exports: [
        SpellListComponent
    ]
})
export class SpellListModule { }
