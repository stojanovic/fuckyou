#! /usr/bin/env node

'use strict'

const argv = require('minimist')(process.argv.slice(2))
    , fuck = require('../fuck')

if (argv._[0] === 'you') {
  fuck(argv._[1])
    .then(response => console.log(response))
    .catch(err => console.error(err))
} else {
  console.log('help')
}
