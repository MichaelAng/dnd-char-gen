import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpellListComponent } from './spell-list/spell-list.component';

const appRoutes: Routes = [{
    path: 'spells',
    component: SpellListComponent
}, {
    path: '',
    redirectTo: 'spells',
    pathMatch: 'full'
}, {
    // Catch all for 404 pages
    path: '**',
    redirectTo: 'spells'
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
