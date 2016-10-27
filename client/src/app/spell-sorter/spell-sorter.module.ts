import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';

import { SpellDetailComponent }   from './spell-detail/spell-detail.component';
import { SpellDetailResolve } from './shared/spell-detail-resolve.service';
import { SpellListComponent }   from './spell-list/spell-list.component';
import { SpellService } from './shared/spell.service';
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
    ],
    providers: [
        SpellDetailResolve,
        SpellService
    ]
})
export class SpellSorterModule { }
