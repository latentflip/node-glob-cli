#!/usr/bin/env node

var glob = require('globby');

var patterns = process.argv.slice(2);

glob(patterns, function (err, files) {
    if (err) throw err;
    process.stdout.write(files.join('\n'));
});
