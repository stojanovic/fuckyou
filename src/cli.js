#! /usr/bin/env node

'use strict'

const fs   = require('fs')
    , argv = require('minimist')(process.argv.slice(2))
    , fuck = require('../fuck')

let usage = function(code) {
  let rs = fs.createReadStream(__dirname + '/help.txt')

  rs.pipe(process.stdout)
  rs.on('close', (code) => {
    if (code) process.exit(code)
  })
}

let args = ['you', 'off', 'u']

let fuckYou = function(processName) {
  fuck(processName)
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

if (argv._.length > 1 && args.indexOf(argv._[0]) > -1) {
  fuckYou(argv._[1])
} else if (argv._.length === 1) {
  fuckYou(argv._[0])
} else {
  usage(0)
}
