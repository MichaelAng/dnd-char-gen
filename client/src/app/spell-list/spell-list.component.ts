import { Component, OnInit } from '@angular/core';

import { Spell } from './spell';

import { spells } from '../../../public/data/spells';

@Component({
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
    title = 'Hello World';
    spells: Spell[];

    ngOnInit () {
        this.spells = spells;
    }
}
