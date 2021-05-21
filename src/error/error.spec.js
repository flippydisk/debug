import * as Errors from './index';
import * as Tests from '../tests';

const allItems = {
    function: [
        Errors.error
    ],
};

const cb = null;

const options = {
    credentials: 'same-origin',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    }
};

const signature = {
    cb,
    name: 'fetchhandler',
    options,
    url: null,
};

const errorResponse = {
    errorDescriptor: 'There is not a parameter for endpoint in this call',
    moreInfo: 'general error',
};

const noCallBackResponse = {
    // eslint-disable-next-line quotes
    errorDescriptor: `The cb parameter in this call has an expected typeof === 'function' or undefined, and instead it has a typeof object`,
    moreInfo: 'general error',
};

const errorMessage = Object.assign(signature, {
    message: 'There is not a parameter for endpoint in this call',
});

describe('Debug', () => {
    Tests.testDefaults(Errors, allItems);

    test('will options will have certain values', () => {
        expect(Errors.error).toBeDefined();
    });

    test('will ensure the needed params are provided and fail gracefully', () => {
        expect(Errors.error(errorMessage)).toEqual(errorResponse);
        const noCallBackError = Object.assign(signature, {
            message: `The cb parameter in this call has an expected typeof === 'function' or undefined, and instead it has a typeof ${typeof cb}`,
        });
        expect(Errors.error(noCallBackError)).toEqual(noCallBackResponse);
    });
});
