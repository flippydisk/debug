#!/bin/sh
echo "Clearing the NPM cache"
npm cache clean --force
echo "Setting NPM registry..."
npm config set registry https://registry.npmjs.org/
echo "Publishing package..."
npm publish
echo "Done. Check for errors above!"
