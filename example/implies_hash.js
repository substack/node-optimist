#!/usr/bin/env node

var argv = require('../index')
    .usage('Usage: $0 -x [num] -y [num]')
    .implies({
        x: 'y',
        w: '--no-h'
    })
    .argv;

if (argv.x) {
    console.log('x / y : ' + (argv.x / argv.y));
}

if (argv.w) {
    console.log(argv.w);
}