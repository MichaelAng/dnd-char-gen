import { Component, OnInit } from '@angular/core';

import { spells } from '../../../public/data/spells';

@Component({
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
    title = 'Hello World';
    spells: any;

    ngOnInit () {
        this.spells = spells;
    }
}
