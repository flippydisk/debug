@page Disable
@parent @flippydisk/tools

# Disable {Class}

## Overview
The `Disable{}` class is used as a URL feature flag to disable whatever it is you wish to disable by
way of a URL parameter, or class instantiation setting.

- What you disable is up to you and your implementation of it. The class simply returns you the "status" of if it should be disabled or not.
- It can be disabled either directly in the file by way of setting `disabled: true` on instantiation, or by URL parameter by using `disable=ControlName`.
- You can disable as many items at a time they you wish by simply adding more of them to the query string:
`disable=Carousel&disable=Accordion`

- Supported methods are:
  - isDisabled() - returns `{Boolean}`

## Importing and Instantiation
Add `@flippydisk/tools` to your project. [@flippydisk/tools](https://github.com/flippydisk/tools) is in the NPM repository, so it should be as simple as the following:

`npm i @flippydisk/tools --save-dev`

However, if you run into any issues, or simply want a "main" branch version, you can alternatively add this manually to your `package.json` under the `dependencies{}` section:

`"@flippydisk/tools": "git+ssh://git@github.com:flippydisk/tools.git"`

Once it's in your project, simply Import the `Disabled` class from @flippydisk/tools.

`import * as Tools from '@flippydisk/tools';`

Add a local instance of `Disabled` to your component by passing `Disabled()` an object
containing the default value of `disabled` and a `control` name.

`const disabled = new tools.Disabled({ disabled: false, control: 'Carousel' });`

## Use
Set a variable for the value of `tools.Disabled.isDisabled()` to store the Boolean on whether
the item is disabled.

### ex:
```
constructor(element) {
    super();
    const disabled = new this.Disabled({ disabled: false, control: 'Carousel' });
    this.isDisabled = disabled.isDisabled();
}

init() {
	if (this.isDisabled) return false; // halt all further progress if it's disabled.

	// Otherwise, load your script, run your function, whatever it may be.
}
```

## Example use case: Carousel

### Disable via URL parameter: `disable=Carousel`

![screenshot 2018-10-31 12 53 54](https://git.corp.adobe.com/storage/user/4006/files/25fb7428-dd0c-11e8-9604-48906eaf5cdd)

### Disable by setting `disabled: true` on instantiation:
Optionally, you can also use `debug` to console log the status of your disabled status, which we're using to log out our examples here.
Please see [Debug](https://git.corp.adobe.com/Dexter/dexterUI-tools/tree/master/src/utils/debug) for implementation details.
```
this.disable = new this.Disable({ disabled: true, control: 'AdobeLaunch' });
```

![screenshot 2018-10-31 12 58 51](https://git.corp.adobe.com/storage/user/4006/files/d2379fdc-dd0c-11e8-8bf3-0a65844610ce)
