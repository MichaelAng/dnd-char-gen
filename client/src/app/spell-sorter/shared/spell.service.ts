import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Spell } from './spell.model';

@Injectable()
export class SpellService {
    private spellsUrl = 'app/spells';

    constructor (private http: Http) {}

    getSpells(): Observable<Spell[]> {
        return this.http.get(this.spellsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSpell(id: number): Observable<Spell> {
        return this.getSpells()
            .map(spells => spells.find(spell => spell.id === id));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
