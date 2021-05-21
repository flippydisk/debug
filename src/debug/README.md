@page Debug
@parent @flippydisk/tools

# Debug {Class}

## Overview
Debug is used for console logging important information to developers to see values, errors, where we are in if/else
cases and so on.

- It can take any number of comma separated arguments and print them out with several different methods.
- It can be enabled either directly in the file by way of setting `debug: true` on instantiation, or by URL parameter
  by using `debug=ControlName`.

- Supported methods are:
    - log()
    - warn()
    - error()
    - info()
    - debug() `// Some browsers consider this the same as .log()`
    - table()

## Importing and Instantiation
Add a local instance of `Debug` to your component by passing `Debug()` an object containing the default value of
`debug` and a name.

```
import { Debug } from '@flippydisk/tools';
const debug = new Debug({ debug: false, control: 'MyControl' });
```

## Use
Add `debug.log()` inline to any of your scripts and the logger will print out the information to the console via the
method you choose. The logger will automatically display the Control name of the log you gave it in instantiation,
but it's also recommended to prefix your debug information with the name of the methods this particular logger is
currently in.

### ex:
```
debug.log('constructor: document.body:', document.body);
```
### Output
```
MyControl: constructor: document.body: <body>
```

## Example use case: MyControl

### Enable via URL parameter:
`http://www.website.com?debug=MyControl`

### Enable all debugging scripts via URL parameter:
`http://www.website.com?debug=All`

### Enable by setting `debug: true` on instantiation:
```
debug = new Debug({ debug: true, control: 'MyControl' });
```

### Enable all debugging scripts by setting `debug: true` in debug.js:
```
this.options = {
  debug: true, // `true` here will enable debugging in file mode for all your loggers
  param: 'debug',
  urlMode: 'Enabling URL Debug mode for',
  fileMode: 'Enabling File Debug mode for',
  concatenator: ':',
  control: false,
};
```

## Tests
`debug.spec.js` tests against all functions, objects, strings and boolean values to be defined, to be the correct
`typeof`, and their expected values to be what they should be.
