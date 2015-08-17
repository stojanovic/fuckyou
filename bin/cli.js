#! /usr/bin/env node


'use strict';

var fs = require('fs'),
    argv = require('minimist')(process.argv.slice(2)),
    fuck = require('../fuck');

var usage = function usage(code) {
  var rs = fs.createReadStream(__dirname + '/help.txt');

  rs.pipe(process.stdout);
  rs.on('close', function (code) {
    if (code) process.exit(code);
  });
};

var args = ['you', 'off', 'u'];

var fuckYou = function fuckYou(processName) {
  fuck(processName).then(function (response) {
    return console.log(response);
  })['catch'](function (err) {
    return console.error(err);
  });
};

if (argv._.length > 1 && args.indexOf(argv._[0]) > -1) {
  fuckYou(argv._[1]);
} else if (argv._.length === 1) {
  fuckYou(argv._[0]);
} else {
  usage(0);
}

