import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'spell-detail',
    template: 'hello world {{id}}',
})
export class SpellDetailComponent {
    id: number;
    paramsSubscription: any;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => this.id = parseInt(params['id'], 10));
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
