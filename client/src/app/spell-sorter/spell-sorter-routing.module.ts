import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpellListComponent }      from './spell-list/spell-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'spells',  component: SpellListComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SpellSorterRoutingModule { }
