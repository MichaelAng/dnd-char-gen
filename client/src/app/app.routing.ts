import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/spells',
    pathMatch: 'full'
}, {
    // Catch all for 404 pages
    path: '**',
    redirectTo: '404'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
