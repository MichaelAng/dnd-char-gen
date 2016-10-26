import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellListComponent } from './spell-list/spell-list.component';

const routes: Routes = [
    { path: 'spells', component: SpellListComponent },
    { path: '', redirectTo: 'spells', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
