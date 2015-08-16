#! /usr/bin/env node


'use strict';

var argv = require('minimist')(process.argv.slice(2)),
    fuck = require('../fuck');

if (argv._[0] === 'you') {
  fuck(argv._[1]).then(function (response) {
    return console.log(response);
  })['catch'](function (err) {
    return console.error(err);
  });
} else {
  console.log('help');
}

