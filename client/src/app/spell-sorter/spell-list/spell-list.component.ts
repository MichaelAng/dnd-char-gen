import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Spell } from '../shared/spell.model';
import { SpellService } from '../shared/spell.service';

@Component({
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css'],
    providers: [ SpellService ]
})
export class SpellListComponent implements OnInit {
    errorMessage: string;
    spells: Spell[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private spellService: SpellService
    ) { }

    ngOnInit() {
        this.getSpells();
    }

    getSpells() {
        this.spellService.getSpells()
            .subscribe(
                spells => this.spells = spells,
                error =>  this.errorMessage = <any>error
            );
    }

    onSelect(spell: any) {
        this.router.navigate([spell.id], { relativeTo: this.route });
    }
}
