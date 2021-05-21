@page Lang
@parent @flippydisk/tools

# Lang {Suite}

## Overview
`lang` is a suite of tools for ease of use checks against common practices that are otherwise a much longer check.
Often times we find ourselves doing this check over and over:

```
if (item !== undefined && item !== null && item !== '') {};
```

Lang tools look to simplify that in several different ways. In the above case, you can simply use `lang.isNullish()`
to check for all of those things at once:

```
import * as lang from '@flippydisk/tools/lib/lang';

if (!lang.isNullish(item)) {};
```

Alternatively, you can also get the individual items only if you do not want the entire suite:

```
import filterHTMLTags from '@flippydisk/tools/lib/utils/lang/filterHTMLTags';
```

- Supported methods are:
  - `isEmptyString()` {returns Boolean}
  - `isUndefined()` {returns Boolean}
  - `isNumber()` {returns Boolean}
  - `isNull()` {returns Boolean}
  - `isNullish(`) {returns Boolean}
  - `isStringy()` {returns Boolean}
  - `isEmptyObject()` {returns Boolean}
  - `getStringSafely()` {returns String}
  - `filterHTMLTags()` {returns String}
  - `getPropertySafely()` {returns value of the property if it exists, or `undefined`}

## Importing and Instantiation
Add `@flippydisk/tools` to your project.
[@flippydisk/tools](https://github.com/flippydisk/tools) is in the npm registry, so it should be as simple as the
following:

`npm i @flippydisk/tools --save-dev`

However, if you run into any issues, or simply want a "main" branch version, you can alternatively add this manually
to your `package.json` under the `dependencies{}` section:

`"@flippydisk/tools": "git+ssh://git@github.com:flippydisk/tools.git"`

Once it's in your project, you can either import all of the `lang` methods, or pick and choose. `lang` utilities are individual functions, so there is no instantiation needed.

```
import * as lang from '@flippydisk/tools/lang';
```

or as individual items:

```
import { isNull } from '@flippydisk/tools/lang';
```

## Use
Add any Boolean method, like `lang.isNumber(1)`, inline to any of your scripts and it will run the necessary checks
(which vary based on the method you use) to return a Boolean value for the ease of use in an `if` check or `switch`
case. Alternatively, there are also two methods that will return string values, with safety checks to avoid the `NaN`
error when only using `.toString()`. Finally, there is also a method for stripping HTML tags and returning a string.

### ex:
#### Boolean values:
```
- `lang.isEmptyString(''); // returns true`
- `lang.isEmptyString('something'); // returns false`
- `lang.isEmptyString(object.item); // returns false, as it is not a string`
```

#### String values:
```
- `lang.getStringSafely(1); // returns '1'`
- `lang.getStringSafely(true); // returns 'true'`
- `lang.getStringSafely(object.item); // returns string value of object.item`
```

#### HTML filtering:
```
const html = '<a href="flippydisk.com" class="MyClass">The words I want &amp; more.</a>';
- `lang.filterHTMLTags(html); // returns 'The words I want &amp; more.'`
```

## Tests
`lang/index.spec.js` tests against all functions, objects, strings and boolean values to be defined, to be the correct
`typeof`, and their expected values to be what they should be.

```
$ npm run test -- lang

> @flippydisk/tools@1.0.0 test
> cross-env npm run lint && jest "lang"

 PASS  src\lang\index.spec.js
  Lang
    √ will provide defaults on initialization (2ms)
    and its dependencies should
      √ be defined (3ms)
    functions should always return the correct result.
      √ isEmptyString should return Boolean (1ms)
      √ isUndefined should return Boolean (1ms)
      √ isNumber should return Boolean (1ms)
      √ isNull should return Boolean (1ms)
      √ isNullish should return Boolean with the leeway of also checking for null, undefined, NaN and empty strings (1ms)
      √ getStringSafely should return the string if it can decipher it, or null if it cant (1ms)
      √ isStringy should return the string if it can decipher it, or null if it cant (1ms)
      √ filterHTMLTags should return a string without any HTML tags (1ms)
      √ isEmptyObject should return a boolean value (1ms)

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.953s, estimated 6s
Ran all test suites matching /lang/i.
```
