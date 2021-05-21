@page Error
@parent @flippydisk/tools

# Error {Function}

## Overview
The `error()` function is designed to provide a clean, optionally logged, error utilizing the
[@flippydisk/tools/debug](https://github.com/flippydisk/tools/src/debug) feature. This is especially helpful when
fetching items with Ajax calls that have failed, or "catching" errors gracefully that would otherwise halt the page
progress.

## Importing and Instantiation
Add `@flippydisk/tools` to your project. [@flippydisk/tools](https://github.com/flippydisk/tools) is in the NPM
repository, so it should be as simple as the following:

`npm i @flippydisk/tools --save-dev`

However, if you run into any issues, or simply want a "main" branch version, you can alternatively add this
manually to your `package.json` under the `dependencies{}` section:

`"@flippydisk/tools": "git+ssh://git@github.com:flippydisk/tools.git"`

Once it's in your project, simply Import the `error` function from @flippydisk/tools.

As a suite of tools:
`import * as tools from '@flippydisk/tools';` // then use as `tools.error`

Or individually:
`import error from '@flippydisk/tools/error';`

## Use
Setup the error logging object, then call `error` into your component. `message` is always required, but as it takes in an
`Object`, each param other than `message` is optional and will have a default.

### ex:
```
if (thisTing === undefined) {
    const errorMessage = { message: 'You must define `thisTing`' };
    return error(errorMessage);
}
```

This returns an Object for you to play with:
```
Object { errorDescriptor: "You must define `thisTing`", moreInfo: "general error" }
```

And, if `Debug` is on, logs the error to the console with a stack trace:

```
const debug = new Debug({ debug: true, control: 'Error' });

error(errorMessage);

 Error: You must define `thisTing` general error debugger eval code:206:16
    printIt debugger eval code:206
    logFactory debugger eval code:101
    error debugger eval code:12
    <anonymous> debugger eval code:1
```

`status` & `statusText` in particular are more helpful to set during Ajax calls, for passing on say a "403" error and
the "Unauthorized" reason.

You can optionally provide any additional information you desire as the `...rest` arguments, that `error` will
cast into an array of params. As previously mentioned, this is especially useful for Ajax responses.

### ex:
```
const signature = {
    cb,
    name: 'fetchhandler',
    options,
    url: endpoint,
};

return window.fetch(endpoint, options)
  .then((response) => {
      const { ok, status, statusText, url } = response;

      if (ok) return response.json();

      const errorMessage = Object.assign(signature, {
          message: `${status}: ${statusText}, failure for call to ${url}`,
          response,
          status,
          statusText,
      });

      return Promise.reject(errorMessage);
  })
  .then((data) => {
      if (typeof cb === 'function') return cb(data);
      return data;
  })
  .catch(errorMessage => error(errorMessage));
```
