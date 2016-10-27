import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SpellService } from './spell.service';
import { Spell } from './spell.model';

@Injectable()
export class SpellDetailResolve implements Resolve<Spell> {
  constructor(private spellService: SpellService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.spellService.getSpell(+route.params['id']);
  }
}
