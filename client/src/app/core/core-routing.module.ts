import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '404',  component: PageNotFoundComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule { }
