import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SpellService } from './spell.service';
import { Spell } from './spell.model';

@Injectable()
export class SpellDetailResolve implements Resolve<Spell> {
    constructor(
      private spellService: SpellService,
      private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any>|boolean {
        let id = +route.params['id'];
            return this.spellService.getSpell(+route.params['id'])
                .map(data => {
                    if (data) {
                        return data;
                    } else {
                        this.router.navigate(['/404']);
                        return false;
                    }
                }).first();
    }
}
