import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { SpellDetailComponent }   from './spell-detail/spell-detail.component';
import { SpellListComponent }   from './spell-list/spell-list.component';
import { SpellSorterComponent } from './spell-sorter.component';
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
