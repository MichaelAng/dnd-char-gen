import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Core Modules
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

// Feature Modules
import { SpellListComponent } from './spell-list/spell-list.component';

const appRoutes: Routes = [{
    path: 'spells',
    component: SpellListComponent
}, {
    path: '404',
    component: PageNotFoundComponent
}, {
    path: '',
    redirectTo: 'spells',
    pathMatch: 'full'
}, {
    // Catch all for 404 pages
    path: '**',
    redirectTo: '404'
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
