import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ActivatedRoute, Router } from '@angular/router';

import { SpellService } from '../shared/spell.service';
import { Spell } from '../shared/spell.model';

@Component({
    selector: 'spell-detail',
    templateUrl: './spell-detail.component.html',
    styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit, OnDestroy {
    private spell: Spell;
    private routeSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private spellService: SpellService
    ) {}

    ngOnInit() {
        this.routeSubscription = this.route.data.subscribe((data: {spell: Spell}) => this.spell = data.spell);
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
}
