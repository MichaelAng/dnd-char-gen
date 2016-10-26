import { InMemoryDbService } from 'angular-in-memory-web-api';

import { spells } from '../../../public/data/spells';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return {
            spells: spells,
        };
    }
}
