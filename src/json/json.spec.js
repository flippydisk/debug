import fetchMock from 'jest-fetch-mock';
import * as Json from './json';
import * as Tests from '../tests/tests';
import * as Mocks from './json.mocks';

const allItems = {
    function: [
        Json.ajax,
        Json.promise,
        Json.responder
    ],
};

describe('Json', () => {
    Tests.testDefaults(Json, allItems);

    describe('responder():', () => {
        test('will ensure the needed params are provided and fail gracefully', () => {
            const errorMessage = Object.assign(Mocks.signature, {
                message: 'There is not a parameter for endpoint in this call',
            });
            expect(Json.responder(errorMessage)).toEqual(Mocks.errorResponse);
            const noCallBackError = Object.assign(Mocks.signature, {
                message: `The cb parameter in this call has an expected typeof === 'function' or undefined, and instead it has a typeof ${typeof Mocks.cb}`,
            });
            expect(Json.responder(noCallBackError)).toEqual(Mocks.noCallBackResponse);
        });
    });

    describe('ajax() will ensure the needed params are provided and fail gracefully:', () => {
        test('no endpoint check', () => {
            const fail = Json.ajax();
            expect(fail.errorDescriptor).toEqual(Mocks.noEndPoint);
        });

        test('improper callback param', () => {
            const stringCallback = `${Mocks.invalidCallBack} string`;
            const failString = Json.ajax('anything', 'notAFunction');
            const arrayCallback = `${Mocks.invalidCallBack} object`;
            const failArray = Json.ajax('anything', []);
            const failObject = Json.ajax('anything', {});

            expect(failString.errorDescriptor).toEqual(stringCallback);
            expect(failArray.errorDescriptor).toEqual(arrayCallback);
            expect(failObject.errorDescriptor).toEqual(arrayCallback);
        });
    });

    describe('ajax() will test a success scenario:', () => {
        beforeEach(() => {
            fetch.resetMocks();
            fetchMock.doMock();
        });

        test('(mocked) Ajax response', () => {
            fetch.once(JSON.stringify(Mocks.goodData));

            Json.ajax(Mocks.ajaxJson)
                .then((data) => {
                    expect(data).toEqual(Mocks.goodData);
                })
                .catch(error => expect(error).toEqual(Mocks.badResponse));

            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(Mocks.ajaxJson);
        });
    });

    describe('ajax() will test a success scenario:', () => {
        beforeEach(() => {
            fetch.resetMocks();
            fetchMock.doMock();
        });

        test('with a callback function', () => {
            fetch.once(JSON.stringify(Mocks.mockCallback(Mocks.goodDataWithCallback)));

            Json.ajax(Mocks.ajaxJson, Mocks.mockCallback)
                .then((data) => {
                    expect(data).toEqual(Mocks.goodDataWithCallback);
                })
                .catch(error => expect(error).toEqual(Mocks.badResponse));

            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(Mocks.ajaxJson);
        });
    });

    describe('ajax() will test a fail scenario:', () => {
        beforeEach(() => {
            fetch.resetMocks();
            fetchMock.doMock();
        });

        test('have a failed (mocked) Ajax response after sending a bad URL', () => {
            fetch.once(JSON.stringify(Mocks.defaultBadResponse));

            Json.ajax(Mocks.badAjaxJson)
                .then((data) => {
                    expect(data).toEqual(Mocks.defaultBadResponse);
                })
                .catch((error) => {
                    expect(error).toEqual(Mocks.defaultBadResponse);
                });

            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(Mocks.badAjaxJson);
        });
    });

    describe('promise() will setup:', () => {
        test('a Promise.resolve', () => {
            Json.promise(Mocks.signature, Mocks.goodResponse)
                .then((data) => {
                    expect(data).toEqual(Mocks.fullPromiseResolve);
                })
                .catch((error) => {
                    expect(error).toEqual(Mocks.defaultBadResponse);
                });
        });

        test('a Promise.reject', () => {
            Json.promise(Mocks.signature, Mocks.badResponse, true)
                .then((data) => {
                    expect(data).toEqual(Mocks.fullPromiseRejection);
                })
                .catch((error) => {
                    expect(error).toEqual(Mocks.defaultBadResponse);
                });
        });
    });
});
