@page Tests
@parent @flippydisk/tools

# Tests {Suite}

## Overview
`tests` is a suite of tools for ease of use for standard testing tools. Things like "verify it exists and is not
null", that you'd want to test against _every_ function, object and string you have.

## Importing and Instantiation
Add `@flippydisk/tools` to your project.
[@flippydisk/tools](https://github.com/flippydisk/tools) is in the npm registry, so it should be as simple as the
following:

`npm i @flippydisk/tools --save-dev`

However, if you run into any issues, or simply want a "main" branch version, you can alternatively add this manually
to your `package.json` under the `dependencies{}` section:

`"@flippydisk/tools": "git+ssh://git@github.com:flippydisk/tools.git"`

Once it's in your project, you can either import all of the `lang` methods, or pick and choose. `lang` utilities are
individual functions, so there is no instantiation needed.

`import * as Tests from '@flippydisk/tools/tests';` // call with Tests.testDefaults()

or as individual items:

```
import * as Tests from '@flippydisk/tools/tests';
```

## Use
Setup an object in your tests that maps out your class/suites list of modules by types. The Object key should be the
name of the type, and then it should be an array of the names of your modules.

Instantiate a class if need be, or simply use the Suite name as the `instance` param. Then, run the class or suite
through the `Tests.testDefaults()` method and it will ensure that all these items exist and are the `type` you say it
should be.

### An example using the Debug class:
```
import * as Tests from '@flippydisk/tools/tests';
import Debug from '@flippydisk/tools/debug';

const debug = new Debug({ debug: false, control: 'DebugTest' });

const allItems = {
    function: [
        debug.constructor,
        debug.setOptions,
        debug.config,
        debug.sort,
        debug.find,
        debug.logFactory,
        debug.log,
        debug.warn,
        debug.error,
        debug.info,
        debug.debug,
        debug.table,
        debug.trace,
        debug.printIt
    ],
    object: [
        debug.options,
    ],
    string: [
        debug.options.control,
        debug.options.param,
        debug.options.urlMode,
        debug.options.fileMode,
        debug.options.debugAll,
        debug.options.concatenator
    ],
    boolean: [
        debug.options.debug
    ]
};

describe('Debug', () => {
    Tests.testDefaults(debug, allItems);
});
```

#### Result:
```
 PASS  src/debug/index.spec.js
  Debug
    √ will provide defaults on initialization (4 ms)
    √ and its dependencies should be defined (3 ms)
```

### An example using the Lang suite:

```
import * as Tests from '@flippydisk/tools/tests';
import * as Lang from '@flippydisk/tools/lang';

const allItems = {
    function: [
        Lang.filterHTMLTags,
        Lang.getPropertySafely,
        Lang.getStringSafely,
        Lang.isEmptyString,
        Lang.isEmptyObject,
        Lang.isNull,
        Lang.isNullish,
        Lang.isNumber,
        Lang.isObject,
        Lang.isStringy,
        Lang.isType,
        Lang.isUndefined,
        Lang.isValidObject,
    ],
};

describe('Lang', () => {
    Tests.testDefaults(Lang, allItems);
});
```

#### Result:
```
 PASS  src/lang/index.spec.js
  Lang
    √ will provide defaults on initialization (4 ms)
    √ and its dependencies should be defined (3 ms)
```

## Tests:
There isn't a lot to test here yet, mostly because `testDefaults` actually runs tests itself, so it's harder to check
against a real 'result'. However, we can at least use it to test itself:

```
const allItems = {
    function: [
        Tests.testDefaults
    ],
};

Tests.testDefaults(Tests, allItems);
```

```
 PASS  src/tests/tests.spec.js
  Tests
    √ will provide defaults on initialization (2 ms)
    √ and its dependencies should be defined (1 ms)
```
