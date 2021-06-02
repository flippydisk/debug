@page @flippydisk/tools
@group Debug 0 Debug
@group Disable 1 Disable
@group Json 2 Json
@group Lang 3 Lang
@group Tests 4 Tests

# Flippydisk Web Tools [![Build Status](https://travis-ci.com/flippydisk/tools.svg?branch=main)](https://travis-ci.com/flippydisk/tools)

## Overview
Flippydisk tools are designed to help front end developers build projects with a few of the general necessities that
are extremely helpful in the process. Debugging, graceful error messages, url search tools, ES6 Ajax calls, and
similar items are what this suite focuses on. `1.0.0` will include a debugger, error logger and the ability to
disable an entire script from a URL param. More features will be added in future versions.

Basically, I kept finding myself needing these items over and over again, project after project. So much so that I
finally decided to put them all together in a suite that can be imported via NPM.

## Installation
In your project's directory:

```
npm i @flippydisk/tools --save-dev
```

That's it! Once you have it installed in your project, see individual component's README files for their own use.

Ex. `Debug`:
```
import * as tools from '@flippydisk/tools';
const debug = new tools.Debug({ debug: false, control: 'MyControl' });
```

## Tests
Each component will have its own tests which will also run as a full Flippydisk tools test suite.

```
npm test
```

### Output:
```
$ npm run test

> @flippydisk/tools@0.0.4 lint
> cross-env eslint ./src/**/*.js

 PASS  src/tests/tests.spec.js
 PASS  src/debug/debug.spec.js
 PASS  src/disable/disable.spec.js
 PASS  src/json/json.spec.js
 PASS  src/lang/lang.spec.js
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |   94.95 |    90.18 |   95.24 |   95.45 |
 src                   |       0 |        0 |       0 |       0 |
  index.js             |       0 |        0 |       0 |       0 |
 src/debug             |   94.83 |    89.47 |     100 |      96 |
  debug.js             |   94.83 |    89.47 |     100 |      96 | 63-64
 src/disable           |   90.32 |       75 |     100 |      90 |
  disable.js           |   90.32 |       75 |     100 |      90 | 83-85
 src/json              |   92.59 |    88.46 |   77.78 |      94 |
  ajax.js              |      85 |    92.31 |      75 |   84.21 | 53-54,62
  json.js              |       0 |        0 |       0 |       0 |
  json.mocks.js        |     100 |      100 |     100 |     100 |
  promise.js           |    87.5 |      100 |   66.67 |     100 |
  responder.js         |     100 |       75 |     100 |     100 | 20-21
 src/lang              |     100 |    96.67 |     100 |     100 |
  filterHTMLTags.js    |     100 |      100 |     100 |     100 |
  getPropertySafely.js |     100 |    93.75 |     100 |     100 | 33
  getStringSafely.js   |     100 |      100 |     100 |     100 |
  isEmptyObject.js     |     100 |    91.67 |     100 |     100 | 14
  isEmptyString.js     |     100 |      100 |     100 |     100 |
  isNull.js            |     100 |      100 |     100 |     100 |
  isNullish.js         |     100 |      100 |     100 |     100 |
  isNumber.js          |     100 |      100 |     100 |     100 |
  isObject.js          |     100 |      100 |     100 |     100 |
  isStringy.js         |     100 |      100 |     100 |     100 |
  isType.js            |     100 |      100 |     100 |     100 |
  isUndefined.js       |     100 |      100 |     100 |     100 |
  isValidObject.js     |     100 |      100 |     100 |     100 |
  lang.js              |       0 |        0 |       0 |       0 |
 src/tests             |     100 |      100 |     100 |     100 |
  tests.js             |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

Test Suites: 5 passed, 5 total
Tests:       57 passed, 57 total
Snapshots:   0 total
Time:        3.962 s
Ran all test suites.
```

## Documentation
Each component will also have its own README file.
- [https://flippydisk.github.io/tools](https://flippydisk.github.io/tools)
- README files on Github: [https://github.com/flippydisk/tools](https://github.com/flippydisk/tools)
- In any editor capable of reading .md files
- Build them from this project: `npm run docs`
