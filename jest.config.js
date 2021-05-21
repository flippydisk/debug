module.exports = {
    collectCoverageFrom: [
        '!**/__tests__/**',
        'src/**/*.js'
    ],
    moduleNameMapper: {
        '~root(.*)$': '<rootDir>/$1'
    },
    moduleDirectories: [
        'node_modules'
    ],
    moduleFileExtensions: [
        'js'
    ],
    modulePathIgnorePatterns: [
        '<rootDir>/dist/'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/spec/tests.config.js'
    ],
    testEnvironment: 'jest-environment-jsdom-global',
    testMatch: ['**/__tests__/**/*.spec|test.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.html$': 'jest-raw-loader',
        '^.+\\.jsx?$': 'babel-jest'
    },
    testURL: 'http://localhost/'
};
