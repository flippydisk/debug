#!/bin/sh
echo "Clearing the NPM cache"
npm cache clean --force
echo "Publishing package..."
npm publish --access public
echo "Done. Check for errors above!"
