import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';

import { SpellService } from '../shared/spell.service';
import { Spell } from '../shared/spell.model';

@Component({
    selector: 'spell-detail',
    templateUrl: './spell-detail.component.html',
    styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {
    id: number;
    paramsSubscription: any;

    constructor(
        private route: ActivatedRoute,
        private spellService: SpellService
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: {spell: Spell}) => this.id = data.spell.id);
    }
}
