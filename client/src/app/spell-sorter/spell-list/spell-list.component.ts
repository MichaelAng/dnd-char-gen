import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'spell-list',
    templateUrl: './spell-list.component.html',
    styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
    spells: any[];
    public selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.spells = [
            { id: 0, name: 'name0' },
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' }
        ];
    }

    isSelected(spell: any) {
        return spell.id === this.selectedId;
    }

    onSelect(spell: any) {
        this.selectedId = spell.id;

        // Navigate with relative link
        this.router.navigate([spell.id], { relativeTo: this.route });
    }
}
