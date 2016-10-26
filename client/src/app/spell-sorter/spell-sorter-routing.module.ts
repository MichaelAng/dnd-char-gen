import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { SpellDetailComponent }       from './spell-detail/spell-detail.component';
import { SpellListComponent }       from './spell-list/spell-list.component';
import { SpellSorterComponent }     from './spell-sorter.component';

const routes: Routes = [{
    path: 'spells',
    component: SpellSorterComponent,
    children: [
        { path: '', component: SpellListComponent },
        { path: ':id', component: SpellDetailComponent }
    ]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SpellSorterRoutingModule { }
