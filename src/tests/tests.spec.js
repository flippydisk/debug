import * as Tests from './tests';

const allItems = {
    function: [
        Tests.testDefaults
    ],
};

describe('Tests', () => {
    Tests.testDefaults(Tests, allItems);
});
