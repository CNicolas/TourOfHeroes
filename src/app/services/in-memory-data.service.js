"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Hulk' },
            { id: 2, name: 'Iron Man' },
            { id: 3, name: 'Spiderman' },
            { id: 4, name: 'Thor' },
            { id: 5, name: 'Deadpool' },
            { id: 6, name: 'Squirrel Girl' },
            { id: 7, name: 'Captain Americo' },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map