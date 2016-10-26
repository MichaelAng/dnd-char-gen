import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { SpellSorterComponent } from './spell-sorter.component';
import { SpellListComponent }   from './spell-list/spell-list.component';
import { SpellDetailComponent }   from './spell-detail/spell-detail.component';


import { SpellSorterRoutingModule } from './spell-sorter-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SpellSorterRoutingModule
    ],
    declarations: [
        SpellDetailComponent,
        SpellListComponent,
        SpellSorterComponent
    ]
})
export class SpellSorterModule { }
