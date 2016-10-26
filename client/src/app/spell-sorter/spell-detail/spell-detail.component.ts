import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'spell-detail',
    templateUrl: './spell-detail.component.html',
    styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent {
    id: number;
    paramsSubscription: any;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => this.id = +params['id']);
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
