import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Spell } from '../shared/spell.model';

import { spells } from '../../../../public/data/spells';

@Component({
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
    spells: Spell[];

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit () {
        this.spells = spells;
    }

    onSelect(spell: any) {
        this.router.navigate([spell.id], { relativeTo: this.route });
    }
}
