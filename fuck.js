'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var exec = require('child_process').exec,
    Promise = require('bluebird');

function fuckYou(processName) {
  return new Promise(function (resolve, reject) {
    if (!processName) return reject('Process name is required!');

    var letters = 'abcdefghijklmnopqrstuvqxyz'.split('');
    var srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('');

    var map = {};

    letters.forEach(function (element, index) {
      return map[element] = srettel[index];
    });

    exec('killall -9 ' + processName, function (error, stdout, stderr) {

      if (error) return reject(stderr);

      resolve('(╯°□°）╯︵ ' + processName.split('').reverse().map(function (element) {
        return map[element.toLowerCase()];
      }).join(''));
    });
  });
}

exports['default'] = fuckYou;
module.exports = exports['default'];

