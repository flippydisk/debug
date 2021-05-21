import * as Tests from './index';

const allItems = {
    function: [
        Tests.testDefaults
    ],
};

describe('Tests', () => {
    Tests.testDefaults(Tests, allItems);
});
