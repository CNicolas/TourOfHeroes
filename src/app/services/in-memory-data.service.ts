import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 1, name: 'Hulk' },
            { id: 2, name: 'Iron Man' },
            { id: 3, name: 'Spiderman' },
            { id: 4, name: 'Thor' },
            { id: 5, name: 'Deadpool' },
            { id: 6, name: 'Squirrel Girl' },
            { id: 7, name: 'Captain Americo' },
        ];
        return { heroes };
    }
}
