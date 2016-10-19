import { Component } from '@angular/core';

@Component({
    selector: 'nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
    isCollapse: boolean = true;

    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
}
