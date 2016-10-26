import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { SpellSorterComponent }     from './spell-sorter.component';
import { SpellListComponent }       from './spell-list/spell-list.component';

const routes: Routes = [{
    path: 'spells',
    component: SpellSorterComponent,
    children: [{
        path: '',
        component: SpellListComponent
    }]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SpellSorterRoutingModule { }
