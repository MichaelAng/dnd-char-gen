import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { SpellSorterComponent }     from './spell-sorter.component';
import { SpellListComponent }       from './spell-list/spell-list.component';
import { SpellDetailComponent }     from './spell-detail/spell-detail.component';

const routes: Routes = [{
    path: 'spells',
    component: SpellSorterComponent,
    children: [{
        path: '',
        component: SpellListComponent,
        children: [
            { path: ':id', component: SpellDetailComponent },
            { path: '', component: SpellDetailComponent }
        ]
    }]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SpellSorterRoutingModule { }
