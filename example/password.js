#!/usr/bin/env node

// Many times we may wish to have our user enter a private piece of 
// data, like a password, that we don't want to show up in the shell
// history (e.g. launchServer -u Nathan -p seasame).  Typically the
// user is prompted for this info and the content from standard input
// is masked or hidden all together.  Using the `protect` option 
// allows you to do just this.
var argv = require('optimist')
    .protect('p', 'Enter Password:')
    .demand('u')
    .alias('u', 'username')
    .alias('p', 'password')
    .argv;

// The flow when reading masked input (e.g. for passwords) is a bit different 
// due to the fact that we must wait for user input.  Instead of "blocking", 
// this library takes the more typical node methodology of using "events".
argv._io.on('input', function(argv) {
    console.log('Username: ' + argv.u);
    console.log('Secret Password: ' + argv.p);
});